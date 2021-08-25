import { firebase, FieldValue } from "../lib/firebase";

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
    console.log(res);
    return res.docs.map((item) => ({...item.data(), docId: item.id }));
}