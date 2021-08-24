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