let numberMather = document.querySelector("#number-mather");
const nameMather = document.querySelector("#mather");
const startDate = document.querySelector("#date-start");
const endDate = document.querySelector("#date-conclusion");


const startBtn = document.querySelector("#start");

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

let count = 0;

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

