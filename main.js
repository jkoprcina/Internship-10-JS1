//FIRST TASK
//a algorithm
function turnTheLettersAround(userInputString){
    let userInputArray = userInputString.split("");
    let stringToReturn = "";
    do {
        stringToReturn += userInputArray.pop();
    }while(userInputArray.length !== 0);
    return stringToReturn;
}
//b algorithm
function mostCommonLetter(userInputString){
    let userInputArray = userInputString.split("");
    let allLetters = {}
    mostTimesUsedLetter = "";
    numberOfTimesLetterWasUsed = 0;
    for(let i = 0; i < userInputArray.length; i++){
        if (!allLetters[userInputArray[i]]){
            allLetters[userInputArray[i]] = 0;
        }
        allLetters[userInputArray[i]]++;
        if(allLetters[userInputArray[i]] > numberOfTimesLetterWasUsed){
            numberOfTimesLetterWasUsed = allLetters[userInputArray[i]];
            mostTimesUsedLetter = userInputArray[i];
        }
    }
    return ("Most common letter is " + mostTimesUsedLetter + " and is repeated " + numberOfTimesLetterWasUsed);
}
//c algorithm
function makeOnlyFirstLetterOfEachWordCapital(userInputString){
    let userInputArray = userInputString.split("");
    let stringToReturn = "";
    for(let i = 0; i < userInputArray.length; i++){
        if(i === 0){
            stringToReturn += userInputArray[i].toUpperCase();;
        }
        else if(userInputArray[i-1] === " "){
            stringToReturn += userInputArray[i].toUpperCase();;
        }
        else{
            stringToReturn += userInputArray[i].toLowerCase();;
        }
    }
    return stringToReturn;
}
//d algorithm
function rotateWordLetters(userInputString){
    let userInputArray = userInputString.split(" ");
    for(let i = 0; i < userInputArray.length; i++){
        userInputArray[i] = turnTheLettersAround(userInputArray[i]);
    }
    return userInputArray.join(" ");
}
//User part of the program
function chooseAlgorithm(){
    let x;
    do {
        x = prompt( "Choose the number for which operation you want:\n" +
                    "1 Reverse everything\n2 Anagram\n3 Capitalize\n4 Reverse words\nKRAJ Exit program");
        switch(x){
            case "1":
                alert(turnTheLettersAround(prompt("Enter the text the algorithm will be done on:")));
                break;
            case "2":
                alert(mostCommonLetter(prompt("Enter the text the algorithm will be done on:")));
                break;
            case "3":
                alert(makeOnlyFirstLetterOfEachWordCapital(prompt("Enter the text the algorithm will be done on:")));
                break;
            case "4":
                alert(rotateWordLetters(prompt("Enter the text the algorithm will be done on:")));
                break;
            case "KRAJ":
                break;
            default:
                alert("Wrong input");
        }
        if(x === null){
            break;
        }
    }while(x.toUpperCase() !== "KRAJ");
}

//Calling method to start the program for the first task
chooseAlgorithm();


//SECOND TASK
function containsArrays(){
    let array = [
        {
            name: "Luke Skywalker",
            height: 172,
            mass: 77,
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male"
        },
        {
            name: "C-3PO",
            height: 167,
            mass: 75,
            hair_color: "n/a",
            skin_color: "gold",
            eye_color: "yellow",
            birth_year: "112BBY",
            gender: "n/a"
        },
        {
            name: "R2-D2",
            height: 96,
            mass: 32,
            hair_color: "n/a",
            skin_color: "white, blue",
            eye_color: "red",
            birth_year: "33BBY",
            gender: "n/a"
        },
        {
            name: "Darth Vader",
            height: 202,
            mass: 136,
            hair_color: "none",
            skin_color: "white",
            eye_color: "yellow",
            birth_year: "41.9BBY",
            gender: "male"
        },
        {
            name: "Leia Organa",
            height: 150,
            mass: 49,
            hair_color: "brown",
            skin_color: "light",
            eye_color: "brown",
            birth_year: "19BBY",
            gender: "female"
        }];
}