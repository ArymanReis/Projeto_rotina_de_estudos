let numberMather = document.querySelector("#number-mather");
const nameMather = document.querySelector("#mather");
const startDate = document.querySelector("#date-start");
const endDate = document.querySelector("#date-conclusion");

let count = 0;

const startBtn = document.querySelector("#start");
const addBtnCompleted = document.querySelector("#to-add");
const subtractBtnCompleted = document.querySelector("#subtract");

function summary() {

    const goalName = (nameMather.value);
    let numberClasses = Number(numberMather.value);
    const targetStartDate = (startDate.value);
    const targetEndDate = (startDate.value);

    const summaryRegisteredGoals = document.querySelector("#select-goals");

    const newGoalLocation = document.createElement("span");

    const goalSummary = (`Nome da meta: ${goalName} | Total de aulas: ${numberClasses} | Data de início: ${targetStartDate} | Previsão de conslusão: ${targetEndDate}`); 

    newGoalLocation.appendChild(document.createTextNode(goalSummary));

    summaryRegisteredGoals.appendChild(newGoalLocation);

};


function numberClasse() {

    let numberOfClasses = Number(numberMather.value);

    const fragmentClasse = document.createDocumentFragment();


    while(count < numberOfClasses) {

        const imgClose = document.createElement("img");

        imgClose.src = "assets/graduation_close.svg";
        imgClose.alt = "Icone de aula com seleção fechada";

        fragmentClasse.appendChild(imgClose);

        count++;
    }

    document.querySelector(".conclusion").appendChild(fragmentClasse);

};



startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    numberClasse();

    summary();

});

addBtnCompleted.addEventListener("click", () => {

    const circleGraphic = document.querySelector("#graphic-progress");
    const numberCompleted = count;
    
    numberMather = circleGraphic;

    document.querySelector("#goals-completed").innerHTML = count++;
    document.querySelector("#data-graphic").innerHTML = numberCompleted + "%";

    circleGraphic.style.strokeDashoffset = 336 - (300 * numberCompleted) / 100; 

});

subtractBtnCompleted.addEventListener("click", () => {

    document.querySelector("#goals-completed").innerHTML = count--;

});

