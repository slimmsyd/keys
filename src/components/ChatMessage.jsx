import { useState, useEffect } from "react";

function ChatMessage({ message }) {
    const [displayedMessage, setDisplayedMessage] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        if (typing && displayedMessage.length < message.length) {
            const timer = setTimeout(() => {
                setDisplayedMessage(message.slice(0, displayedMessage.length + 1));
            }, 50); // Adjust typing speed as necessary

            return () => clearTimeout(timer);
        } else {
            setTyping(false);
        }
    }, [displayedMessage, message, typing]);

    return (
        <>
            {displayedMessage}
            {typing && <span>|</span>} {/* This is a simple cursor simulation, adjust styling as needed */}
        </>
    );
}

export default ChatMessage;