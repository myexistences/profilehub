document.addEventListener('DOMContentLoaded', () => {
    const enterOverlay = document.querySelector('.enter-overlay');
    const audio = document.getElementById('audio');
    const video = document.getElementById('background-video');
    const volume = document.getElementById('volume');

    enterOverlay.addEventListener('click', () => {
        enterOverlay.classList.add('hidden');

        // Optional: fully remove after fade-out (if you want)
        setTimeout(() => {
            enterOverlay.style.display = 'none'; // only if you want to fully remove it after transition
        }, 500); // match CSS transition time

        video.play().catch(err => console.error('Video play failed:', err));
        audio.play().catch(err => console.error('Audio play failed:', err));
    });

    volume.addEventListener('input', () => {
        audio.volume = volume.value / 100;
    });

    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${10 + Math.random() * 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
    });
});
