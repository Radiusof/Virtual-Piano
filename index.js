document.addEventListener("keydown", function (event) {

    switch (event.code) {
        case "KeyA" :
            console.log("The 'A' key is pressed.");
            let audioA = document.createElement("AUDIO");
            audioA.src = "./Sound/A.mp3";
            audioA.play();
            break;
        case "KeyS" :
            console.log("The 'S' key is pressed.");
            let audioS = document.createElement("AUDIO");
            audioS.src = "./Sound/S.mp3";
            audioS.play();
            break;
        case "KeyD" :
            console.log("The 'D' key is pressed.");
            let audioD = document.createElement("AUDIO");
            audioD.src = "./Sound/D.mp3";
            audioD.play();
            break;
        case "KeyF" :
            console.log("The 'F' key is pressed.");
            let audioF = document.createElement("AUDIO");
            audioF.src = "./Sound/F.mp3";
            audioF.play();
            break;
        case "KeyG" :
            console.log("The 'G' key is pressed.");
            let audioG = document.createElement("AUDIO");
            audioG.src = "./Sound/G.mp3";
            audioG.play();
            break;
        case "KeyH" :
            console.log("The 'H' key is pressed.");
            let audioH = document.createElement("AUDIO");
            audioH.src = "./Sound/H.mp3";
            audioH.play();
            break;
        case "KeyJ" :
            console.log("The 'J' key is pressed.");
            let audioJ = document.createElement("AUDIO");
            audioJ.src = "./Sound/J.mp3";
            audioJ.play();
            break;
        case "KeyW" :
            console.log("The 'W' key is pressed.");
            let audioW = document.createElement("AUDIO");
            audioW.src = "./Sound/W.mp3";
            audioW.play();
            break;
        case "KeyE" :
            console.log("The 'E' key is pressed.");
            let audioE = document.createElement("AUDIO");
            audioE.src = "./Sound/E.mp3";
            audioE.play();
            break;
        case "KeyT" :
            console.log("The 'T' key is pressed.");
            let audioT = document.createElement("AUDIO");
            audioT.src = "./Sound/T.mp3";
            audioT.play();
            break;
        case "KeyY" :
            console.log("The 'Y' key is pressed.");
            let audioY = document.createElement("AUDIO");
            audioY.src = "./Sound/Y.mp3";
            audioY.play();
            break;
        case "KeyU" :
            console.log("The 'U' key is pressed.");
            let audioU = document.createElement("AUDIO");
            audioU.src = "./Sound/U.mp3";
            audioU.play();
            break;

        default :
            console.log("Warning");
            break;

    }
});