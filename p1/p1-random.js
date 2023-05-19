/*
    CIT 281
    Name: Adaline Witz
*/

function randomstring() 
{
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const length = random(5,26);
    let result = '';
    for (let i = 0; i < length; i++) {
        result += letters [random(0,26)];
    } 
    console.log(result);
}

function random(min,max) 
{
    return Math.floor(Math.random()*(max-min)+min);
}

randomstring();
