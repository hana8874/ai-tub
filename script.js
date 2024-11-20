function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    if (userMessage.trim() === "") return;

    let chatMessages = document.getElementById("chat-messages");
    
    // Display user message
    let userMessageElement = document.createElement("div");
    userMessageElement.textContent = "You: " + userMessage;
    chatMessages.appendChild(userMessageElement);

    // Display AI response
    let aiResponse = getAIResponse(userMessage);
    let aiMessageElement = document.createElement("div");
    aiMessageElement.textContent = "AI: " + aiResponse;
    chatMessages.appendChild(aiMessageElement);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}

function getAIResponse(userMessage) {
    // Basic AI responses (can be expanded with more logic)
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing well! How about you?",
    };

    // Return response or a default one
    return responses[userMessage.toLowerCase()] || "Sorry, I don't understand that.";
}