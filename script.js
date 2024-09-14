function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}
const MAX_DURATION = 4;

document.addEventListener("DOMContentLoaded", () => {
    const neonText = document.getElementById('neon-text');
    const textContent = neonText.textContent;
    neonText.innerHTML = '';

    const animateCSS = "-webkit-animation: text-flicker-in-glow {duration}s linear {delay}s both; animation: text-flicker-in-glow {duration}s linear {delay}s both;"

    // Wrap each letter in a span and append to the h1
    let prevDelay = -1
    let randomDelay = -1
    let randomDuration = -1
    for (let i = 0; i < textContent.length; i++) {
        const letter = textContent[i];
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add("text-flicker-in-glow")
        while (randomDelay == prevDelay) {
            if (i == 0) {
                randomDelay = 0
            } else {
                randomDelay = getRandom(0.5, MAX_DURATION).toFixed(1)
            }
        }
        prevDelay = randomDelay
        randomDuration = (MAX_DURATION - randomDelay).toFixed(1)
        console.log(randomDelay, randomDuration)
        span.style = animateCSS.replace("{delay}", randomDelay).replace("{duration}", randomDuration);
        neonText.appendChild(span);
    }
});

