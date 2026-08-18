const intro = document.getElementById("intro");
const skip = document.getElementById("skipIntro");
const video = document.getElementById("screeningVideo");
const playButton = document.getElementById("playButton");

let revealed = false;

function revealCinema() {
  if (revealed) return;
  revealed = true;
  intro.classList.add("reveal");

  window.setTimeout(() => {
    intro.remove();
  }, 2400);
}

// Longer ident so the signal feels intentional rather than like a loading spinner.
window.setTimeout(revealCinema, 11500);

skip.addEventListener("click", revealCinema);

playButton.addEventListener("click", async () => {
  if (!video.src && !video.currentSrc) return;

  if (video.paused) {
    await video.play();
    playButton.textContent = "Ⅱ";
  } else {
    video.pause();
    playButton.textContent = "▶";
  }
});

video.addEventListener("play", () => playButton.textContent = "Ⅱ");
video.addEventListener("pause", () => playButton.textContent = "▶");
