// Calculator Logic

class Logic{
    constructor(){
        this.display = '0';
        this.isReset = false;
    }

    solveEquation(){
        const eqArr = this.display.split(' ');
            
        let currentIndex = eqArr.findIndex((element)=>element === '*' || element === '/');
        while(currentIndex > 0){
            if(eqArr[currentIndex] === '*'){
                const op1 = Number.parseInt(eqArr[currentIndex - 1], 10);
                const op2 = Number.parseInt(eqArr[currentIndex + 1], 10);
                eqArr.splice((currentIndex - 1), 3, (op1 * op2));
            }
            
            if(eqArr[currentIndex] === '/'){
                const op1 = Number.parseFloat(eqArr[currentIndex - 1], 10);
                const op2 = Number.parseFloat(eqArr[currentIndex + 1], 10);
                eqArr.splice((currentIndex - 1), 3, Number.parseInt(op1 / op2, 10), 10);
            }
            currentIndex = eqArr.findIndex((element)=>element === '*' || element === '/');
        }

        currentIndex = eqArr.findIndex((element)=>element === '+' || element === '-');
        while(currentIndex > 0){
            if(eqArr[currentIndex] === '+'){
                const op1 = Number.parseInt(eqArr[currentIndex - 1], 10);
                const op2 = Number.parseInt(eqArr[currentIndex + 1], 10);
                eqArr.splice((currentIndex - 1), 3, (op1 + op2));
            }
            
            if(eqArr[currentIndex] === '-'){
                const op1 = Number.parseInt(eqArr[currentIndex - 1], 10);
                const op2 = Number.parseInt(eqArr[currentIndex + 1], 10);
                eqArr.splice((currentIndex - 1), 3, (op1 - op2));
            }
            currentIndex = eqArr.findIndex((element)=>element === '+' || element === '-');
        }
        
        this.display =  eqArr[0];
        return this.display;
    }
}

const logic = new Logic();

export default logic;