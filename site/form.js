function createForm(){
    let formColumn = document.getElementById("formcolumn");
    console.log(formColumn)

    return null;
}

function saveForm(){
    let timePeriodsArrTmp = []
    let formElements = document.forms;
    console.log(formElements)

    for (const form of formElements) {
        let name = form.elements[1].value;
        let start = form.elements[2].value;
        let end = form.elements[3].value;

        let startDate = new Date();
        startDate.setHours(start.substr(0,2));
        startDate.setMinutes(start.substr(2,2));

        console.log(startDate)

        let endDate = new Date();
        endDate.setHours(end.substr(0,2));
        endDate.setMinutes(end.substr(2,2));
    
        let period = {name:"leisure", start: startDate, end: endDate}
        timePeriodsArrTmp.push(period);
    }
    return timePeriodsArrTmp;
}

function createData(){
    let timePeriodsArr = []

    let workStart = new Date()
    workStart.setHours(9);
    workStart.setMinutes(0);
    let workEnd = new Date()
    workEnd.setHours(17);
    workEnd.setMinutes(0);

    let workPeriod = {name:"leisure", start: workStart, end: workEnd}
    timePeriodsArr.push(workPeriod);

    return timePeriodsArr;
}

window.addEventListener('load', function () {
    createData();
    createForm();
  })