const music = new Audio('muza.mp3');

// const main = () => {

// }

// addEventListener('DOMContentLoaded', () => {
//     main();
// })

addEventListener('click', () => {
    music.loop = true;
    music.play();

    window.scrollTo({
        top: document.body.scrollHeight
    });

    setInterval(() => {
        fetch('/').then(() => {
            new NewWindow();
        })

    }, timeClamp(500, 2000));
});

const timeClamp = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class NewWindow {
    constructor() {
        const win = window.open('', '_blank', "location=yes,height=150,width=150,scrollbars=yes,status=yes");
        if (!win) return;

        win.document.write('<html><body></body></html>')
        win.focus();

        setInterval(() => {
            const w = Math.random() * parseInt(window.screen.availWidth.toString());
            const h = Math.random() * parseInt(window.screen.availHeight.toString());
            win.resizeTo(w, h);
            win.moveTo(w, h)

        }, 1000);
    }
}

//NIE USUWAC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export { }