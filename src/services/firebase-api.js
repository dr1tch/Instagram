import { firebase } from "../lib/firebase";

// this function will verify if the username already exists in the database return true or false
export async function usernameAlreadyExists(username) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();
    return result.docs.length > 0;
}

// get the user by his userId
export async function getUserByUserId(userId) {
    const res = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", userId)
        .get();
    return res.docs.map((item) => ({...item.data(), docId: item.id }));
}

// get the user by his username
export async function getUserByUsername(username) {
    const res = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();
    return res.docs.map((item) => ({...item.data(), docId: item.id }));
}

// get the posts of the users that the current user is following
// we need the id of the current user, the list of the users that he is following

export async function getPosts(userId, following) {
    // get all the posts of the users followed by the current user
    const res = await firebase
        .firestore()
        .collection("posts")
        .where("userId", "in", following)
        .get();
    console.log(`res`, res);

    const followedUserPosts = res.docs.map((post) => ({
        ...post.data(),
        docId: post.id,
    }));

    const postsWithUserDetails = await Promise.all(
        followedUserPosts.map(async(post) => {
            let liked = false;
            if (post.likes.includes(userId)) liked = true;
            const user = await getUserByUserId(post.userId);
            const { avatar, username } = user[0];
            return { username, avatar, ...post, liked };
        })
    );
    return postsWithUserDetails;
}

// getSuggestedUsers: get a list of suggested users for the current user to follow.
export async function getSuggestedUsers(userId, following) {
    console.log(`following`, following);
    console.log(`userId`, userId);
    let query = firebase.firestore().collection("users");
    if (following.length > 0) {
        query = query.where("userId", "not-in", [...following, userId]);
        console.log("if");
    } else {
        query = query.where("userId", "!=", userId);
        console.log("else");
    }
    const res = await query.limit(10).get();
    console.log(`res-sugg`, res);
    const suggestions = res.docs.map((user) => ({
        ...user.data(),
        userId: user.id,
    }));
    console.log(`suggestions`, suggestions);
    return suggestions;
}