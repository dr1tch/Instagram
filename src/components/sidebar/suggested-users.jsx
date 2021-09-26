import User from "./user";
export default function SuggestedUsers({ suggestions, loggedInUserDocId, userId }) {
    
    return (
        suggestions.map((suggestion) => (
            <User user={suggestion} loggedInUserDocId={loggedInUserDocId} userId={userId} />
        ))
    );
};
