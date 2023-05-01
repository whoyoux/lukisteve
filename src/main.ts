const music = new Audio('muza.mp3');

const main = () => {
    console.log('szkajpurPompa')
    console.log('jak cos to kopie wlasnie bitcoina na twoim kompie iksde')
}

addEventListener('DOMContentLoaded', () => {
    main();
})

addEventListener('click', () => {
    music.loop = true;
    music.play();
});

export { }