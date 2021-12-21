document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA"){
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/A.mp3").play();
        console.log("The 'A' key is pressed.");
    } else if (event.code == "KeyS") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/S.mp3").play();
        console.log("The 'S' key is pressed.");
    } else if (event.code == "KeyD") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/D.mp3").play();
        console.log("The 'D' key is pressed.");
    } else if (event.code == "KeyF") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/F.mp3").play();
        console.log("The 'F' key is pressed.");
    } else if (event.code == "KeyG") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/G.mp3").play();
        console.log("The 'G' key is pressed.");
    } else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/H.mp3").play();
    } else if (event.code == "KeyJ") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\white_keys.zip/J.mp3").play();
        console.log("The 'J' key is pressed.");
    } else if (event.code == "KeyW") {
    let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\black_keys.zip/W.mp3").play();
    console.log("The 'W' key is pressed.");
    } else if (event.code == "KeyE") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\black_keys.zip/E.mp3").play();
        console.log("The 'E' key is pressed.");
    } else if (event.code == "KeyT") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\black_keys.zip/T.mp3").play();
        console.log("The 'T' key is pressed.");
    } else if (event.code == "KeyY") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\black_keys.zip/Y.mp3").play();
        console.log("The 'Y' key is pressed.");
    } else if (event.code == "KeyU") {
        let audio = new Audio("C:\\Users\\Admin\\WebstormProjects\\Virtual Piano1\\Virtual Piano\\Let there be music\\black_keys.zip/U.mp3").play();
        console.log("The 'U' key is pressed.");
}
});
