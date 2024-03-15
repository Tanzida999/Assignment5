function play(){
    hideElementById('start');
    showElementById('main');
}

// const currentSeat = getTextElementValueById('seats-left');
// const updatedSeat = currentSeat - 1;
// setTextElementValueByID('seats-left', updatedSeat);

// const currentSeatNumber = document.getElementById('current-alphabet');
// const currentAlphabet = currentAlphabetElement.innerText;       
// const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
function handleKeyboardKeyUpEvent(){
    const passengerPressed = event.key;
    console.log('passenger pressed', passengerPressed);
    if(passengerPressed ){
        console.log('Passenger pressed', passengerPressed)
    }
    
}
