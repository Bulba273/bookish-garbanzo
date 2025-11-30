const { animate, stagger } = anime;

document.addEventListener('DOMContentLoaded', function () {

    animate('.birthday-message', {
        translateY: [200, 0],
        //scale: 2,
        opacity: [.5, 1],
        delay: 250,
        duration: 1000,
        ease: 'out(1.68)'
    });
    animate(
        '.balloon',
        {
            translateY: [50, 0],
            //scale: 2,
            opacity: [.001, 1],
            delay: stagger(25),
            duration: 250,
            ease: 'out(1.68)'
        });
    animate(
        '.flame',
        {
            scale: [0.5, 1, 0.5],
            opacity: [0.5, 1, 0.5,],
            duration: [1500],
            delay: stagger(100),
            ease: 'bounce',
            loop: 100
        });
    animate(
        '.confetti-container',
        {
            translateY: [-200, 200],
            //scale: 2,
            opacity: [0.0, 0.5, 1],
            delay: 1000,
            duration: 2000,
            ease: 'out(1.68)'
        });
    animate(
        '.gift-container',
        {
            //scale: 2,
            scale: [.95, 1.50, 0.95],
            delay: 100,
            duration: 500,
            ease: 'outElastic',
            loop: true
        });

})