import { drawColor} from "./color";
import { totalRange } from "./range";

const paint = document.querySelector('.paint');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const bg = document.querySelector('.paint__bg');
const box = document.querySelector('.paint__box');
const clear = document.querySelector('.paint__bg--clear');
canvas.width = window.innerWidth * 0.6;
canvas.height = window.innerHeight * 0.5;

let drawMode = false;
export let bgMode = false;

document.addEventListener('mousedown', () => {
   drawMode = true;
});

document.addEventListener('mouseup', () => {
    drawMode = false;
});


canvas.addEventListener('mousemove', (event) => {
    if (drawMode) {
        if(!bgMode) {
            let size = totalRange * 50;
            const x = event.offsetX;
            const y = event.offsetY;
            ctx.fillStyle = drawColor;
            ctx.fillRect(x, y, size, size);
        } else {
            canvas.style.background = drawColor;
        }
    }
});

bg.addEventListener('click', () => {
    if (!bgMode) {
        bgMode = true;
        bg.style.background = '#82BEFF';
        box.style.background = '#ccc';
    } else {
        bgMode = false;
        bg.style.background = '#ccc';
        box.style.background = '#ff0000';
    }
});

clear.addEventListener('click', () => {
    canvas.style.background = '#fff';
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
});