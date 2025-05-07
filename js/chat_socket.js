

const chat1 = {id: 42, user: "mrscooby_doo", color: "#1E90FF", content: "hi MONK KEKW EEEY!!!"};
const chat2 = {id: 44, user: "stellamelonn", color: "#FF69B4", content :"im gonna touch you"};
const chat3 = {id: 50, user: "dubstep_dalton", color: "#C91F1F", content: "ant to submit a video? Rules: Vid KEKW must be safe for Twitch, 60 seconds or less, and be a working YouTube, Tiktok, KEKW Instagram, or Twitter link. Each request costs $3. Click this link and put your vid link in the donation message by itself: https://streamelements.com/jimmyhere/tip All tips are final and much appreciated. I have the right to not watch/listen to requests."}


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

//const start_time = performance.now()
const emotes = new Map();
emotes.set("KEKW", "https://cdn.frankerfacez.com/emoticon/381875/1");
emotes.set("hi", "https://cdn.7tv.app/emote/01GX6M9TRR000DJJ63WGMEA4Z8/1x.avif");
emotes.set("joel", "https://cdn.7tv.app/emote/01G08M28KR000BNDCWZMDRQ24X/1x.avif");
emotes.set("JoelJam", "https://cdn.7tv.app/emote/01GCK85N900004YFGF3Z2SZ0YN/1x.webp");
emotes.set("JoelPride", "https://cdn.7tv.app/emote/01G4H6K8E8000FNPC3P1251DYM/1x.webp");
emotes.set("AUGH", "https://cdn.betterttv.net/emote/5ddb7c12e579cd5efad78b28/1x.webp");
emotes.set("AYAYA", "https://cdn.betterttv.net/emote/58493695987aab42df852e0f/1x.webp");
emotes.set("BBoomer", "https://cdn.betterttv.net/emote/5c447084f13c030e98f74f58/1x.webp");
emotes.set("blobDance", "https://cdn.betterttv.net/emote/5ada077451d4120ea3918426/1x.webp");
emotes.set("bongoTap", "https://cdn.betterttv.net/emote/5ba6d5ba6ee0c23989d52b10/1x.webp");
emotes.set("Clap", "https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/1x.webp");
emotes.set("COGGERS", "https://cdn.betterttv.net/emote/5ab6f0ece1d6391b63498774/1x.webp");
emotes.set("EZ", "https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/1x.webp");
emotes.set("FeelsWeirdMan", "https://cdn.betterttv.net/emote/5603731ce5fc5eff1de93229/1x.webp");
emotes.set("gachiBASS", "https://cdn.betterttv.net/emote/57719a9a6bdecd592c3ad59b/1x.webp");
emotes.set("gachiHYPER", "https://cdn.betterttv.net/emote/59143b496996b360ff9b807c/1x.webp");
emotes.set("HUGERS", "https://cdn.betterttv.net/emote/586ddf177672de56f0ac80f5/1x.webp");
emotes.set("HYPERCLAP", "https://cdn.betterttv.net/emote/5b35ca08392c604c5fd81874/1x.webp");
emotes.set("HYPERS", "https://cdn.betterttv.net/emote/5980af4e3a1ac5330e89dc76/1x.webp");
emotes.set("KKonaW", "https://cdn.betterttv.net/emote/598215f47e71d43314a80ad2/1x.webp");
emotes.set("KKool", "https://cdn.betterttv.net/emote/56c2cff2d9ec6bf744247bf1/1x.webp");
emotes.set("monkaHmm", "https://cdn.betterttv.net/emote/5aa16eb65d4a424654d7e3e5/1x.webp");
emotes.set("monkaShoot", "https://cdn.betterttv.net/emote/59c232aeb27c823d5b1fa579/1x.webp");
emotes.set("monkaTOS", "https://cdn.betterttv.net/emote/5a7fd054b694db72eac253f4/1x.webp");
emotes.set("monkaW", "https://cdn.betterttv.net/emote/5981e885eaab4f3320e73b18/1x.webp");
emotes.set("nymmCorn", "https://cdn.betterttv.net/emote/56cb56f5500cb4cf51e25b90/1x.webp");
emotes.set("OMEGALUL", "https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/1x.webp");
emotes.set("peepoPooPoo", "https://cdn.betterttv.net/emote/5c3427a55752683d16e409d1/1x.webp");
emotes.set("peepoRun", "https://cdn.betterttv.net/emote/5bc7ff14664a3b079648dd66/1x.webp");
emotes.set("pepeD", "https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/1x.webp");
emotes.set("Pepega", "https://cdn.betterttv.net/emote/5aca62163e290877a25481ad/1x.webp");
emotes.set("PepegaPls", "https://cdn.betterttv.net/emote/5c04b07db4297124fa9d165e/1x.webp");
emotes.set("PepeHands", "https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/1x.webp");
emotes.set("pepeJAMJAM", "https://cdn.betterttv.net/emote/5c36fba2c6888455faa2e29f/1x.webp");
emotes.set("pepeJAMMER", "https://cdn.betterttv.net/emote/5baa5b59f17b9f6ab0f3e84f/1x.webp");
emotes.set("pepeMeltdown", "https://cdn.betterttv.net/emote/5ba84271c9f0f66a9efc1c86/1x.webp");
emotes.set("PepePls", "https://cdn.betterttv.net/emote/55898e122612142e6aaa935b/1x.webp");
emotes.set("PepeS", "https://cdn.betterttv.net/emote/59420c88023a013b50774872/1x.webp");
emotes.set("pepeSmoke", "https://cdn.betterttv.net/emote/5b15162147c7bf3bfc0b9c76/1x.webp");
emotes.set("POGGERS", "https://cdn.betterttv.net/emote/58ae8407ff7b7276f8e594f2/1x.webp");
emotes.set("ppHop", "https://cdn.betterttv.net/emote/5a9578d6dcf3205f57ba294f/1x.webp");
emotes.set("ppOverheat", "https://cdn.betterttv.net/emote/5b3e953a2c8a38720760c7f7/1x.webp");
emotes.set("ROACH", "https://cdn.betterttv.net/emote/5d61b1b14932b21d9c332f1b/1x.webp");
emotes.set("sumSmash", "https://cdn.betterttv.net/emote/5af84b9e766af63db43bf6b9/1x.webp");
emotes.set("syncWaviest", "https://cdn.betterttv.net/emote/5b38e36b05e329206af6e9cf/1x.webp");
emotes.set("tf", "https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/1x.webp");
emotes.set("AngelThump", "https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/1x.webp");
emotes.set("bUrself", "https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/1x.webp");
emotes.set("FeelsAmazingMan", "https://cdn.betterttv.net/emote/5733ff12e72c3c0814233e20/1x.webp");
emotes.set("FeelsBadMan", "https://cdn.betterttv.net/emote/566c9fc265dbbdab32ec053b/1x.webp");
emotes.set("FeelsBirthdayMan", "https://cdn.betterttv.net/emote/55b6524154eefd53777b2580/1x.webp");
emotes.set("FeelsGoodMan", "https://cdn.betterttv.net/emote/566c9fde65dbbdab32ec053e/1x.webp");
emotes.set("haHAA", "https://cdn.betterttv.net/emote/555981336ba1901877765555/1x.webp");
emotes.set("DuckerZ", "https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/1x.webp");
emotes.set("monkaS", "https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/1x.webp");
emotes.set("3Head", "https://cdn.betterttv.net/frankerfacez_emote/274406/1");
emotes.set("4Weird", "https://cdn.betterttv.net/frankerfacez_emote/308193/1");
emotes.set("HandsUp", "https://cdn.betterttv.net/frankerfacez_emote/229760/1");
emotes.set("Kapp", "https://cdn.betterttv.net/frankerfacez_emote/218860/1");
emotes.set("LOLW", "https://cdn.betterttv.net/frankerfacez_emote/367433/1");
emotes.set("LULW", "https://cdn.betterttv.net/frankerfacez_emote/139407/1");
emotes.set("MEGALUL", "https://cdn.betterttv.net/frankerfacez_emote/419215/1");
emotes.set("MaN", "https://cdn.betterttv.net/frankerfacez_emote/266564/1");
emotes.set("Okayge", "https://cdn.betterttv.net/frankerfacez_emote/410314/1");
emotes.set("pepeGun", "https://cdn.betterttv.net/frankerfacez_emote/201244/1");
emotes.set("PepeLaugh", "https://cdn.betterttv.net/frankerfacez_emote/382281/1");
emotes.set("PepoG", "https://cdn.betterttv.net/frankerfacez_emote/218530/1");
emotes.set("Pog", "https://cdn.betterttv.net/frankerfacez_emote/210748/1");
emotes.set("Pogey", "https://cdn.betterttv.net/frankerfacez_emote/262805/1");
emotes.set("widepeepoHappy", "https://cdn.betterttv.net/frankerfacez_emote/270930/1");
emotes.set("widepeepoSad", "https://cdn.betterttv.net/frankerfacez_emote/303899/1");
emotes.set("YEP", "https://cdn.betterttv.net/frankerfacez_emote/418189/1");
emotes.set("BibleThump", "https://cdn.betterttv.net/frankerfacez_emote/757384/1");
emotes.set(":3", "https://cdn.7tv.app/emote/01FTBN4E0R0001E12995B11Y9B/1x.webp");
emotes.set("AYOOO", "https://cdn.7tv.app/emote/01FPKXNN100007BSRDBAS9AJ0K/1x.webp");
emotes.set("classic", "https://cdn.7tv.app/emote/01GC1RDQMG0006KWSKXFQ8WBFR/1x.webp");
emotes.set("Clueless", "https://cdn.7tv.app/emote/01F6T8NM9R0007M5BTFWSP1YSJ/1x.webp");
emotes.set("catNope", "https://cdn.7tv.app/emote/01FAT7Z95G00033EKAWRH9BK45/1x.webp");
emotes.set("dinkDonk", "https://cdn.7tv.app/emote/01EZPJCXQ8000C438200A44F38/1x.webp");
emotes.set("Jammies", "https://cdn.7tv.app/emote/01GB5S18QG00090V9B3D8CGHNG/1x.webp");
emotes.set("LESGO", "https://cdn.7tv.app/emote/01F6RD7B88000B4N55W5NS55R7/1x.webp");
emotes.set("Looking", "https://cdn.7tv.app/emote/01FNCFXWKR000FZADBM40VP6ZW/1x.webp");
emotes.set("Nerd", "https://cdn.7tv.app/emote/01FEV00990000FCZBKX8KY8JRF/1x.webp");
emotes.set("NOTED", "https://cdn.7tv.app/emote/01F6M3V6G0000AXRNAAMW95HFN/1x.webp");
emotes.set("peepoHey", "https://cdn.7tv.app/emote/01F6NMMEER00015NVG2J8ZH77N/1x.webp");
emotes.set("ratJAM", "https://cdn.7tv.app/emote/01F6QV6G8R0000TEKRM6BFG0Z3/1x.webp");
emotes.set("RaveTime", "https://cdn.7tv.app/emote/01HEC9QF180000W70ZM78RHWZ3/1x.webp");
emotes.set("ReeferSad", "https://cdn.7tv.app/emote/01FGDFTKT800064MEQW00DMZ92/1x.webp");
emotes.set("RIPBOZO", "https://cdn.7tv.app/emote/01F9DGR2YG000E7SC8F959BREV/1x.webp");
emotes.set("RIZZ", "https://cdn.7tv.app/emote/01H9F8ET2R0008QVVK15MGHHRK/1x.webp");
emotes.set("Rollout", "https://cdn.7tv.app/emote/01FK7DNH00000E100ZQ63RGVDC/1x.webp");
emotes.set("Sadge", "https://cdn.7tv.app/emote/01FHNBZRW8000C3ZWT2Z63JS92/1x.webp");
emotes.set("SmokeTime", "https://cdn.7tv.app/emote/01FEHRN6PR000AEZ0QNPT4F4MF/1x.webp");
emotes.set("SNIFFA", "https://cdn.7tv.app/emote/01F7M225F8000AWSXNQ65M4PKG/1x.webp");
emotes.set("sisyphus", "https://cdn.7tv.app/emote/01H2R0XWZG0004T7AAY7XW3ZRA/1x.webp");
emotes.set("Susge", "https://cdn.7tv.app/emote/01F6NTXJZG000BEKN8ZXWMJB86/1x.webp");
emotes.set("Sussy", "https://cdn.7tv.app/emote/01F778KGA80005TDSTZFB2V45J/1x.webp");
emotes.set("Tssk", "https://cdn.7tv.app/emote/01F6M8S930000B5V5G2M2GBRHN/1x.webp");
emotes.set("WAJAJA", "https://cdn.7tv.app/emote/01GYREQH3G00014254X4ET60D9/1x.webp");
emotes.set("VIBE", "https://cdn.7tv.app/emote/01FYQZVG280006SX8JX4TD7SJA/1x.webp");
emotes.set("WICKED", "https://cdn.7tv.app/emote/01F6NM2T080003C6R1CKK0T0P2/1x.webp");
emotes.set("WickedSteer", "https://cdn.7tv.app/emote/01F6N729W8000E0GG0PF8PEJSX/1x.webp");
emotes.set("WiseTree", "https://cdn.7tv.app/emote/01GEAMCZ00000D2JB9BX6A64AE/1x.webp");
emotes.set("xdd", "https://cdn.7tv.app/emote/01FF3R5C30000FF5VVCKV49G6J/1x.webp");
emotes.set("YesYes", "https://cdn.7tv.app/emote/01FCJPHMT00008XKZT17QKXE7W/1x.webp");
emotes.set("YAPPING", "https://cdn.7tv.app/emote/01HB80F6RG0004CB92YXKWRD18/1x.webp");
emotes.set("xddShrug", "https://cdn.7tv.app/emote/01GPQJ1NKR000BGP5H3DVAPXAN/1x.webp");
emotes.set("YESIDOTHINKSO", "https://cdn.7tv.app/emote/01F64J1AMG000AR232513EFJBF/1x.webp");
emotes.set("FeelsDankMan", "https://cdn.7tv.app/emote/01GB9W8JN80004CKF2H1TWA99H/1x.webp");
emotes.set("FeelsOkayMan", "https://cdn.7tv.app/emote/01GB8EEZ800000X4MX5ZF49PTV/1x.webp");
emotes.set("FeelsStrongMan", "https://cdn.7tv.app/emote/01GB8D6Y00000BFSD141G0MBFP/1x.webp");
emotes.set("forsenPls", "https://cdn.7tv.app/emote/01GB8EQNJ8000497KFBZWNSDFZ/1x.webp");
emotes.set("gachiGASM", "https://cdn.7tv.app/emote/01GB8E5PC00000X4MX5ZF49PTH/1x.webp");
emotes.set("Gayge", "https://cdn.7tv.app/emote/01G4GQC5H0000D3DGNAYJJP8EB/1x.webp");
emotes.set("glorp", "https://cdn.7tv.app/emote/01H16FA16G0005EZED5J0EY7KN/1x.webp");
emotes.set("GuitarTime", "https://cdn.7tv.app/emote/01G98V5RFG0001CD052SPS435F/1x.webp");
emotes.set("PartyParrot", "https://cdn.7tv.app/emote/01FKSDK14G0008TM5NY9QEG0QV/1x.webp");
emotes.set("peepoHappy", "https://cdn.7tv.app/emote/01GAZ199Z8000FEWHS6AT5QZV0/1x.webp");
emotes.set("peepoSad", "https://cdn.7tv.app/emote/01GAZ4SBX80007YCE2RXBT44B2/1x.webp");
emotes.set("PianoTime", "https://cdn.7tv.app/emote/01G98V81Q80000BRQD106P0ZEK/1x.webp");
emotes.set("ppL", "https://cdn.7tv.app/emote/01GGD5PJA8000FH13S498E9D8X/1x.webp");
emotes.set("RareParrot", "https://cdn.7tv.app/emote/01GB9W7X5R000497KFBZWNSJKD/1x.webp");
emotes.set("Stare", "https://cdn.7tv.app/emote/01GG3YGWK8000DWE419062SG28/1x.webp");
emotes.set("WAYTOODANK", "https://cdn.7tv.app/emote/01G98W833R0000BRQD106P0ZNT/1x.webp");
emotes.set("4Head", "https://static-cdn.jtvnw.net/emoticons/v2/354/default/dark/1.0");
emotes.set("3Heading", "https://cdn.betterttv.net/emote/5f5cbe0268d9d86c020e615c/1x.webp");
emotes.set("AKSHANING", "https://cdn.betterttv.net/emote/621619b006fd6a9f5be55da9/1x.webp");
emotes.set("akshanYes", "https://cdn.betterttv.net/emote/61d2036a06fd6a9f5bdf0ec1/1x.webp");
emotes.set("ALIENALIENALIENALIENALIEN", "https://cdn.betterttv.net/emote/5fcfb67a8c4e2c46195d583c/2x.webp");
emotes.set("Aware", "https://cdn.betterttv.net/emote/6151c623b63cc97ee6d39040/3x.webp");
emotes.set("Bagel", "https://cdn.betterttv.net/emote/664739c85a1c91a74b73bcf1/1x.webp");
emotes.set("BASED", "https://cdn.betterttv.net/emote/61a1b1b8b50549e7e50116b2/1x.webp");
emotes.set("Bean", "https://cdn.betterttv.net/emote/60617f167493072efdeb6767/1x.webp");
emotes.set("BOOBA", "https://cdn.betterttv.net/emote/5fa99424eca18f6455c2bca5/1x.webp");
emotes.set("catJAM", "https://cdn.betterttv.net/emote/6078828339b5010444cffd5b/1x.webp");
emotes.set("catPUNCH", "https://cdn.betterttv.net/emote/62893fe23c6f14b688486502/1x.webp");
emotes.set("Chatting", "https://cdn.betterttv.net/emote/60f067db8ed8b373e4222dfc/1x.webp");
emotes.set("COOKING", "https://cdn.betterttv.net/emote/6195c89d54f3344f88061b2e/1x.webp");
emotes.set("DareDevilDog", "https://cdn.betterttv.net/emote/6184efbe1f8ff7628e6c869b/1x.webp");
emotes.set("DonoWall", "https://cdn.betterttv.net/emote/5efcd82551e3910deed68751/1x.webp");
emotes.set("forsenCD", "https://cdn.betterttv.net/emote/5d3e250a6d68672adc3fbff7/1x.webp");
emotes.set("FRFR", "https://cdn.betterttv.net/emote/64f31d3dd661725310de093b/1x.webp");
emotes.set("gachiPls", "https://cdn.betterttv.net/emote/607b6d8e39b5010444d01541/1x.webp");
emotes.set("GNOMED", "https://cdn.betterttv.net/emote/5b79ee6449cb1a5176fa34b5/1x.webp");
emotes.set("gorillaFastSpin", "https://cdn.betterttv.net/emote/5f9aeb4f58e96102e92a3d0d/1x.webp");
emotes.set("gorillaPog", "https://cdn.betterttv.net/emote/63f949bbf3b60a2fbc9dc3e1/1x.webp");
emotes.set("GrompTime", "https://cdn.betterttv.net/emote/622e936706fd6a9f5be70327/1x.webp");
emotes.set("HUHH", "https://cdn.betterttv.net/emote/6149d102b63cc97ee6d29c79/1x.webp");
emotes.set("IRELIAING", "https://cdn.betterttv.net/emote/617485c21f8ff7628e6abb6a/1x.webp");
emotes.set("Madge", "https://cdn.betterttv.net/emote/5f4f4fa23769246c0320de37/1x.webp");
emotes.set("monkaEXTREME", "https://cdn.betterttv.net/emote/5b8a9c6f80c14b0422a7b2a0/1x.webp");
emotes.set("MONKE", "https://cdn.betterttv.net/emote/603be3937c74605395f35fd6/1x.webp");
emotes.set("NODDERS", "https://cdn.betterttv.net/emote/60e7e4868ed8b373e421fd85/1x.webp");
emotes.set("NOOOO", "https://cdn.betterttv.net/emote/60c7a7e1f8b3f62601c3dc7b/1x.webp");
emotes.set("Okayeg", "https://cdn.betterttv.net/emote/5de9cb6191129e77b47ca987/1x.webp");
emotes.set("OMEGALULiguess", "https://cdn.betterttv.net/emote/5f8dea786f583802e389380c/1x.webp");
emotes.set("PauseChamp", "https://cdn.betterttv.net/emote/5cd6b08cf1dac14a18c4b61f/1x.webp");
emotes.set("pepeDS", "https://cdn.betterttv.net/emote/5b444de56b9160327d12534a/1x.webp");
emotes.set("PotPls", "https://cdn.betterttv.net/emote/6237419706fd6a9f5be790b4/1x.webp");
emotes.set("RareMonkey", "https://cdn.betterttv.net/emote/55f1cc2b4bbea27f0a7cb210/2x.webp");
emotes.set("Ratir", "https://cdn.betterttv.net/emote/636d7437b9076d0aaebb9d39/3x.webp");
emotes.set("SAMIRAING", "https://cdn.betterttv.net/emote/62768c073c6f14b6884738a1/1x.webp");
emotes.set("Saul3D", "https://cdn.betterttv.net/emote/621424c506fd6a9f5be53a9b/1x.webp");
emotes.set("tenseSmash", "https://cdn.betterttv.net/emote/5d20ef02e1cfde376e532cc0/1x.webp");
emotes.set("ThisIsFine", "https://cdn.betterttv.net/emote/5e2914861df9195f1a4cd411/1x.webp");
emotes.set("TriDance", "https://cdn.betterttv.net/emote/5d1e70f498539c4801cc3811/1x.webp");
emotes.set("ZAMN", "https://cdn.betterttv.net/emote/6181d25b1f8ff7628e6c2c56/1x.webp");
emotes.set("ziggsYEP", "https://cdn.betterttv.net/emote/5fd680ebf534b2348746fd44/1x.webp");
emotes.set("ZULUL", "https://cdn.betterttv.net/emote/60362efb7c74605395f33680/1x.webp");
emotes.set("SourPls", "https://cdn.betterttv.net/emote/566ca38765dbbdab32ec0560/1x.webp");
emotes.set("IsGIGA", "https://cdn.betterttv.net/frankerfacez_emote/315273/1");
emotes.set("5PIGS", "https://cdn.7tv.app/emote/01FSP2VXZR0007E5TN8YT2BN3G/1x.webp");
emotes.set("actually", "https://cdn.7tv.app/emote/01FWZPG2780008F59F7E75MRE8/1x.webp");
emotes.set("AINTNOWAY", "https://cdn.7tv.app/emote/01GDDQVMH000038Q48APH8VE3Q/1x.webp");
emotes.set("BLIZZARD", "https://cdn.7tv.app/emote/01G50B7E580002P97QQ94BDV2H/1x.webp");
emotes.set("bla", "https://cdn.7tv.app/emote/01HBVADK180003KFD14YHJ4PRZ/1x.webp");
emotes.set("EDM", "https://cdn.7tv.app/emote/01F6W1T7XR0002M7WQ84WYZ5HF/4x.webp");
emotes.set("FREEDOM", "https://cdn.7tv.app/emote/01H3CWK3G80001DM59871GTT8N/1x.webp");
emotes.set("IAMSTEVE", "https://cdn.7tv.app/emote/01J74KW6G00000R8ARQ6357TDP/1x.webp");
emotes.set("HolyFuck", "https://cdn.7tv.app/emote/01G9SM9P500004R7CKHZJKGT3N/1x.webp");
emotes.set("JOY", "https://cdn.7tv.app/emote/01G95ZC9ER0009WX0S1XQG1PRP/1x.webp");
emotes.set("KappaChungus", "https://cdn.7tv.app/emote/01GYGRH4PR000FB1V2C5K9ZJNT/1x.webp");
emotes.set("LMAO", "https://cdn.7tv.app/emote/01GF61VBS80008SC6WX3J25B5G/1x.webp");
emotes.set("lore", "https://cdn.7tv.app/emote/01J1ZVB4900004MSX61MSSAWFA/1x.webp");
emotes.set("omE", "https://cdn.7tv.app/emote/01G159GPB00009XPQHT7SV9CZC/1x.webp");
emotes.set("AlienDefault", "https://cdn.7tv.app/emote/01HB3JDHTG0005HE0A9M4Z2TTX/1x.webp");
emotes.set("L9TURBOAKSHAN", "https://cdn.7tv.app/emote/01HCBKK9J0000B78KRZZ461WR2/1x.webp");
emotes.set("L9TURBOJAM", "https://cdn.7tv.app/emote/01FH1M09GG000BF1F0BAH6RF1S/1x.webp");
emotes.set("less", "https://cdn.7tv.app/emote/01HG6P6HFR000BMG8TJHG4W858/1x.webp");
emotes.set("RIOT", "https://cdn.7tv.app/emote/01FS13P9T0000600V9N65KHQK7/4x.webp");
emotes.set("RIVENING", "https://cdn.7tv.app/emote/01G7AGAHXG00000KEMXPDMQYY9/1x.webp");
emotes.set("RUNNING", "https://cdn.7tv.app/emote/01FB583TXG000C0Z8TR69QBAKP/1x.webp");
emotes.set("SettUlted", "https://cdn.7tv.app/emote/01GXZTKMZ8000D5XC265K530KE/1x.webp");
emotes.set("sex", "https://cdn.7tv.app/emote/01FY6CAAHG000FWWXFD46PASF9/1x.webp");
emotes.set("SKINWALKER", "https://cdn.7tv.app/emote/01FS2G2F400002F97PTSA4XGK4/1x.webp");
emotes.set("Worth", "https://cdn.7tv.app/emote/01FM102KS00008TM5NY9QEGS60/4x.webp");
emotes.set("ZiggsJAM", "https://cdn.7tv.app/emote/01GZHNRDK00008MPCP0AD5VJSH/1x.webp");
//const end_time = performance.now();
//console.log(`Importing emotes took ${end_time - start_time}ms`)

/*loadChatMessage(chat3);
loadChatMessage(chat2);
loadChatMessage(chat2);
loadChatMessage(chat1);
loadChatMessage(chat2);
loadChatMessage(chat2);
loadChatMessage(chat2);*/

const socket = new WebSocket('ws://localhost:8765');
socket.addEventListener('open', function (event) {
    socket.send('Connection Established');
});

socket.addEventListener('message', function (event) {
    loadChatMessage(JSON.parse(event.data));
});
