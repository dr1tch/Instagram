import User from "./user";
export default function SuggestedUsers({ suggestions }) {
    
    return (
        suggestions.map((suggestion) => (
            <User user={suggestion} />
        ))
    );
};
