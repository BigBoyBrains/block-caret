//Now ladies and gentlemen, we need to move fatty caret with the text
function moveCaret(input) {
    const caret = input.nextElementSibling;
    const currTxt = document.createElement('canvas').getContext('2d'); // Let's first create a canvas for text measurement
    currTxt.font = getComputedStyle(input).font; // Then get the current font style you are using

    const text = input.value; // Now get the current text in the input
    const textWidth = currTxt.measureText(text).width;  // Calculate the width of the text character in pixels

    caret.style.marginLeft = `${textWidth + 5}px`; // Now move fatty caret the amount of caharcter width plus 5px for padding
}
