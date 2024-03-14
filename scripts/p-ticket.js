function play(){
    hideElementById('start');
    showElementById('main');
}

const currentSeat = getTextElementValueById('seats-left');
const updatedSeat = currentSeat - 1;
setTextElementValueByID('seats-left', updatedSeat);
