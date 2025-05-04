const socket = new WebSocket('ws://localhost:8765');
socket.addEventListener('open', function (event) {
    socket.send('Connection Established');
});

socket.addEventListener('message', function (event) {
    console.log(event.data);
});

const chat1 = {id: 42, user: "mrscooby_doo", color: "#1E90FF", chat: "MONKEEEY!!!"};
const chat2 = {id: 44, user: "stellamelonn", color: "#FF69B4", chat :"im gonna touch you"};
const chat3 = {id: 50, user: "dubstep_dalton", color: "#C91F1F", chat: "ant to submit a video? Rules: Vid must be safe for Twitch, 60 seconds or less, and be a working YouTube, Tiktok, Instagram, or Twitter link. Each request costs $3. Click this link and put your vid link in the donation message by itself: https://streamelements.com/jimmyhere/tip All tips are final and much appreciated. I have the right to not watch/listen to requests."}

const loadChatMessage = (message) => {
    
}