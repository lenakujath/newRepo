let arr1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let arr2 = ["cccooommaaqqoxiil", "gggqaffhhhlllllllllll", "tttoowwwmmww"];

const maxDif = (arrayOne, arrayTwo) => {

    let arrCollect = [];

    for (let i = 0; i < arrayOne.length; i++) {
        arrCollect.push(arrayOne[i].length);     
    };

    arrCollect.sort((a,b) => a - b);

    let arrCollectTwo = [];

    for (let j = 0; j < arrayTwo.length; j++) {
        arrCollectTwo.push(arrayTwo[j].length); 
    };

    arrCollectTwo.sort((a,b) => a - b);

    return (arrCollectTwo[arrCollectTwo.length-1] - arrCollect[0]);
};

//console.log(maxDif(arr1, arr2));