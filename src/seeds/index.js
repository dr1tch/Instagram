import users from "./users-seed";
import posts from "./posts-seed";

export function seedDb(firebase) {
    for (let i = 0; i < users.length; i++) {
        firebase.firestore().collection("users").add(users[i]);
    }
    for (let j = 0; j < posts.length; j++) {
        firebase.firestore().collection("posts").add(posts[j]);
    }
}