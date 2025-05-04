const socket = new WebSocket('ws://localhost:8765');
socket.addEventListener('open', function (event) {
    socket.send('Connection Established');
});

socket.addEventListener('message', function (event) {
    console.log(event.data);
});

const chat1 = {id: 42, user: "mrscooby_doo", color: "#1E90FF", content: "MONKEEEY!!!"};
const chat2 = {id: 44, user: "stellamelonn", color: "#FF69B4", content :"im gonna touch you"};
const chat3 = {id: 50, user: "dubstep_dalton", color: "#C91F1F", content: "ant to submit a video? Rules: Vid must be safe for Twitch, 60 seconds or less, and be a working YouTube, Tiktok, Instagram, or Twitter link. Each request costs $3. Click this link and put your vid link in the donation message by itself: https://streamelements.com/jimmyhere/tip All tips are final and much appreciated. I have the right to not watch/listen to requests."}

const loadChatMessage = (message_object) => {
    const chat = document.getElementById("chat");

    const chat_message = document.createElement("div");
    chat_message.classList.add("chat-message");
    chat_message.onclick = function() { 
        console.log(`Clicked on message with ID: ${message_object.id}\nThe ID has been copied to your clipboard`);
        navigator.clipboard.writeText(`Copied message ID: ${message_object.id}`);
    };
    chat.appendChild(chat_message);

    const user = document.createElement("div");
    user.classList.add("message-user");
    user.innerText = message_object.user;
    user.style.color = message_object.color;
    chat_message.appendChild(user);

    const content = document.createElement("div");
    content.classList.add("message-content");
    content.innerText = `: ${message_object.content}`;
    chat_message.appendChild(content);
}


loadChatMessage(chat3);
loadChatMessage(chat3);
loadChatMessage(chat3);
loadChatMessage(chat3);

loadChatMessage(chat1);
loadChatMessage(chat2);
loadChatMessage(chat3);
loadChatMessage(chat3);
loadChatMessage(chat1);
loadChatMessage(chat3);