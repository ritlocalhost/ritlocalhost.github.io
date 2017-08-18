window.addEventListener('load', event => {
    let header = document.querySelector('.header');
    let logo = document.querySelector('.logo');

    let scroll = event => requestAnimationFrame(() => {
        if (matchMedia('(orientation: portrait)').matches) {
            let scale = Math.max(0.2, Math.min(1 - window.scrollY / header.clientHeight, 1));
            let percent = 1.25 * (1 - scale);

            header.style.transform = `scale(${scale})`;
            logo.style.borderColor = `rgba(255, 255, 255, ${percent})`;
            logo.style.borderRadius = `${percent * 50}vw`;
        } else {
            header.removeAttribute('style');
            logo.removeAttribute('style');
        }
    });

    scroll();
    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', scroll);
});
