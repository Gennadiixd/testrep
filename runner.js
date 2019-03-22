const fs = require('fs');
const parseRaccoon = fs.readFileSync('raccoon_flashcard_data.txt', 'utf-8');
const parseOtter = fs.readFileSync('otter_flashcard_data.txt', 'utf-8');
const parseHawk = fs.readFileSync('nighthawk_flashcard_data.txt', 'utf-8');

class Quiz {
    constructor(formFile = parseRaccoon){
        this.answer = '';
        this.args = process.argv.slice(2);
        this.formFile = formFile;
        this.arrayWithData = [];
        this.parsedObject = {};
    }
    
    dataToArray(formFile = this.formFile,parsedObject = this.parsedObject){
        let dataArray = formFile.split('\n');
        // for (let i = 0; i < dataArray.length; i++){
        //     parsedObject.dataArray[i] = dataArray[i+1];
        //     i++;
        // }

        
        console.log(dataArray);
        console.log(parsedObject);
        
    }

    getQuestion(formFile = this.formFile, arrayWithData = this.arrayWithData){        
        console.log(formFile);
        
    }

    checkAnswer(answer){

    }

}


let raccoonQuiz = new Quiz();
raccoonQuiz.dataToArray();

