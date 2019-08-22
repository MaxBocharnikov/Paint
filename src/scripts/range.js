import {bgMode} from "./draw";

const range = document.querySelector('.paint__size');
let box = document.querySelector('.paint__box');

const rangeWidth = range.offsetWidth;
export let totalRange = 0.1;

function mousedownHandler(downEvent) {
    if(!bgMode) {
        let startX = downEvent.clientX;
        function mouseMoveHandler(upEvent) {
            let shifted = upEvent.clientX - startX;
            startX = upEvent.clientX;
            box.style.left = box.offsetLeft + shifted + 'px';
            if (parseInt(box.style.left, 10) < 0) {
                box.style.left = 0 + 'px';
            }

            if (parseInt(box.style.left, 10) > parseInt(range.offsetWidth, 10)) {
                box.style.left = range.offsetWidth + 'px';
            }
        }

        function mouseUpHandler() {
            totalRange = (box.offsetLeft / rangeWidth).toFixed(2);
            console.log(totalRange);
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
        startX = event.clientX;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
}



box.addEventListener('mousedown', mousedownHandler);


