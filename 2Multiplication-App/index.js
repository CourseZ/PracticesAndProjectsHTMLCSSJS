const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElem = document.getElementById("question");
const inputElem = document.getElementById("input");
const formElem = document.getElementById("form");
const scoreElem = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));  // get the locally stored "score" value

if(!score) // If the value cannot be obtained (thu được) from local, it will assign the value score = 0
{
    score = 0;
}

scoreElem.innerText = `Score: ${score}`;
questionElem.innerText = `What is ${num1} multiply by ${num2}`;
const correctAnswer = num1 * num2;

formElem.addEventListener("submit",() => {
    const userAnswer = + inputElem.value;
    /**gán giá trị của trường input,  Thêm dấu "+" trước biến inputEl.value để đảm bảo rằng giá trị của trường input được chuyển đổi thành số.
     *
     * assign the value of the input field, Add a "+" before the inputEl.value variable to ensure that the input field's value is converted to a number. */
    if (userAnswer === correctAnswer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
    // JSON.stringify() is a method used to convert a JavaScript object to a JSON (JavaScript Object Notation) string.
}