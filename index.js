function writeCards(names, eventName) {
    const arrayCards = [];
    for (let i = 0; i < names.length; i++) {
        arrayCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`); 
       
        //*debugger;
    }console.log(arrayCards);
    return arrayCards;


}




function countDown(startingNumber) {
    
    //let  = 0;
    while (startingNumber > 0) {
        
        console.log(startingNumber);
        startingNumber -= 1;
    };
    
    console.log(startingNumber);
}




