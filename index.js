const sounds = {
    b1: "s1.mp3", 
    b2: "s2.mp3",
    b3: "s3.mp3",
    b4: "s4.mp3",
    b5: "s5.mp3",
    b6: "s6.mp3",
    b7: "s7.mp3",
    b8: "s8.mp3",
    b9: "s9.mp3",
};
function playSound(buttonId) {
    const soundPath = sounds[buttonId];
    if (soundPath) {
        const audio = new Audio(soundPath);
        audio.play();
    }
}
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        playSound(button.id);
    });
});