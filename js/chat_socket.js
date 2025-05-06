const socket = new WebSocket('ws://localhost:8765');
socket.addEventListener('open', function (event) {
    socket.send('Connection Established');
});

socket.addEventListener('message', function (event) {
    loadChatMessage(JSON.parse(event.data));
});


const chat1 = {id: 42, user: "mrscooby_doo", color: "#1E90FF", content: "MONK KEKW EEEY!!!"};
const chat2 = {id: 44, user: "stellamelonn", color: "#FF69B4", content :"im gonna touch you"};
const chat3 = {id: 50, user: "dubstep_dalton", color: "#C91F1F", content: "ant to submit a video? Rules: Vid KEKW must be safe for Twitch, 60 seconds or less, and be a working YouTube, Tiktok, Instagram, or Twitter link. Each request costs $3. Click this link and put your vid link in the donation message by itself: https://streamelements.com/jimmyhere/tip All tips are final and much appreciated. I have the right to not watch/listen to requests."}


const loadChatMessage = (message_object) => {
    const chat = document.getElementById("chat");
    const scrolled_to_bottom = (chat.clientHeight + chat.scrollTop) > (chat.scrollHeight - 10);

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

    const content = document.createElement("span");
    content.classList.add("message-content");
    content.innerText = ': ';
    let message_content = message_object.content.split(" ");
    for (token of message_content) {
        const emote = emotes.get(token);
        //console.log(emote);
        //console.log(token);
        if (emote !== undefined) {
            const emote_span = document.createElement("div");
            emote_span.classList.add("emote-container");
            const emote_img = document.createElement("img");
            emote_img.classList.add("emote-img");
            emote_img.src = emote;
            emote_img.alt = token;
            content.appendChild(emote_span);
            emote_span.appendChild(emote_img);
        }
        else {
            content.append(`${token} `);
        }
    }
    //content.innerText = `: ${content.innerText}`;
    chat_message.appendChild(content);

    if (scrolled_to_bottom) {
        chat.scrollTo(0, chat.scrollHeight);
    }
}

const emotes = new Map();
emotes.set("KEKW", "https://cdn.frankerfacez.com/emoticon/381875/1");

loadChatMessage(chat2);
loadChatMessage(chat2);
loadChatMessage(chat1);
loadChatMessage(chat2);
loadChatMessage(chat2);
loadChatMessage(chat2);
