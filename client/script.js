document.addEventListener('DOMContentLoaded', () => {
    const enterOverlay = document.querySelector('.enter-overlay');
    const audio = document.getElementById('audio');
    const video = document.getElementById('background-video');
    const volumeSlider = document.getElementById('volume');
    const volumeFill = document.getElementById('volume-fill');
    const volumeThumb = document.getElementById('volume-thumb');
    const muteIcon = document.getElementById('mute-icon');
    const waveIcon = document.getElementById('wave-icon');
    const iconContainer = document.querySelector('.icon-container');

    enterOverlay.addEventListener('click', () => {
        enterOverlay.classList.add('hidden');
        setTimeout(() => {
            enterOverlay.style.display = 'none';
        }, 500);
        video.play().catch(err => console.error('Video play failed:', err));
        audio.play().catch(err => console.error('Audio play failed:', err));
    });

    const updateSlider = () => {
        const value = volumeSlider.value;
        const percent = value / 100;
        audio.volume = percent;
        volumeFill.style.transform = `scaleX(${percent})`;
        volumeThumb.style.left = `${value}%`;
        if (value == 0) {
            muteIcon.style.display = "block";
            waveIcon.style.display = "none";
        } else {
            muteIcon.style.display = "none";
            waveIcon.style.display = "block";
        }
    };

    volumeSlider.addEventListener('input', updateSlider);

    iconContainer.addEventListener('click', () => {
        const currentValue = parseInt(volumeSlider.value);
        volumeSlider.value = currentValue === 0 ? 100 : 0;
        updateSlider();
    });

    updateSlider();

    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${10 + Math.random() * 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
    });

    // Add line break to description after ~50 characters
    const description = document.querySelector('.description');
    const text = description.textContent;
    let breakPoint = 50;
    while (breakPoint > 0 && text[breakPoint] !== ' ') {
        breakPoint--;
    }
   if (breakPoint > 0) {
        const part1 = text.substring(0, breakPoint);
        const part2 = text.substring(breakPoint);
        description.innerHTML = `${part1}<br>${part2}`;
    }
});