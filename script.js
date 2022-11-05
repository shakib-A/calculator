class Calcualtor {
    constructor(current, last){
        this.current = currentDisplay
        this.last = lastDisplay
        this.claerAll()
    }
    claerAll(){
        this.current.innerText = ""
        this.last.innerText = ""
        this.previousNumber = undefined
        this.operation = undefined
    }

    getNumVal(number){
        this.current.innerText += number
    }

    deletLast(){
        this.current.innerHTML = this.current.innerHTML.slice(0,-1)
    }

    operate(operand) {
        this.compute()
        // this if statement updates the operation anytime you click a new operation
        if(this.last.innerHTML !== "" && this.operation !== operand){
            this.last.innerText = this.last.innerText.slice(0,-1) + operand
            this.operation = operand
        }

        // stops you from adding more than one operation
        if(this.last.innerHTML.includes(operand)) return

        // variables for later computation
        this.previousNumber = parseInt(this.current.innerText);
        this.operation = operand;

        this.last.innerText += ` ${this.current.innerText} ${operand}`
        this.current.innerText = ""
    }

    compute() {
        if(this.current.innerText !== "" && this.last.innerText !== ""){
            this.currentNumber = parseInt(this.current.innerText)
            switch(this.operation){
                case "+":
                    // update the last display
                    this.current.innerText = `${this.previousNumber + this.currentNumber}`
                    //update the previousnumber
                    this.previousNumber =  this.previousNumber + this.currentNumber
                    this.last.innerText = ""
                    break

                case "-":
                    this.current.innerText = `${this.previousNumber - this.currentNumber}`
                    this.previousNumber = this.previousNumber - this.currentNumber
                    this.last.innerText = ""
                    break
                    
                case "×":
                    this.current.innerText = `${this.previousNumber * this.currentNumber}`
                    this.previousNumber = this.previousNumber * this.currentNumber
                    this.last.innerText = ""
                    break

                case "÷":
                    this.current.innerText = `${this.previousNumber / this.currentNumber}`
                    this.previousNumber = this.previousNumber / this.currentNumber
                    this.last.innerText = ""
                    break
            }
        }
    }
}

const currentDisplay = document.querySelector('.display-2')
const lastDisplay = document.querySelector('.display-1')
const numberButtons = document.querySelectorAll('#num')
const operatorButtons = document.querySelectorAll('.operator')
const deleteButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear-all')
const equalButton = document.querySelector('.equal')

// creating a claculator class
const calculator = new Calcualtor(currentDisplay, lastDisplay)

// click events
clearButton.addEventListener('click',() => {
    calculator.claerAll()
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.getNumVal(button.value)
    })
})

deleteButton.addEventListener('click', () => {
    calculator.deletLast()
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.operate(operator.innerText)
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute()
})



