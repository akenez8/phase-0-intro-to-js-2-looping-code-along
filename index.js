const thankNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards(thankNames){
    let thankedNames = [];
    for (let i = 0; i < thankNames.length; i++){
        thankedNames.push(`Thank you, ${thankNames[i]}, for the wonderful surprise gift!`);
    }
    return thankedNames;
}

const testNum = 11;
function countDown(testNum){
    for(let i = testNum; i >= 0 ; i--){
    console.log(i);
    }
}