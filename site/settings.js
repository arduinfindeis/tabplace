function createForm(timePeriodsArr){
    let formColumn = document.getElementById("formcolumn");
    console.log(formColumn)
    formString = `<form class="pure-form">
    <fieldset>
    <legend>Work times</legend>`;
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    for (timePeriod of timePeriodsArr){
        console.log(timePeriod.start.getHours())
        periodForm = `
            <div class="pure-u-1-5"><input type="text" placeholder="Name" id="name" value=${timePeriod.name}></div>
            <div class="pure-u-1-5"><input type="text" placeholder="Start" value="${zeroPad(timePeriod.start.getHours(),2)}${zeroPad(timePeriod.start.getMinutes(),2)}"></div>
            <div class="pure-u-1-5"><input type="text" placeholder="End (hhmm)" value="${zeroPad(timePeriod.end.getHours(),2)}${zeroPad(timePeriod.end.getMinutes(),2)}"></div>
            <div class="pure-u-1-5">
                <button type="remove" class="pure-button">Remove</button>
            </div>`;
        formString += periodForm;
    }
    formString += `</fieldset>
    </form>`
    formColumn.innerHTML = formString + formColumn.innerHTML;
    
    return null;
}

function saveForm(){
    let timePeriodsArrTmp = []
    let form = document.forms[0];

    let stepNum = Math.floor(form.length/ 4);
    console.log(stepNum)

    for (let step = 0; step < stepNum; step++) {
        rowNum = step * 4
        let name = form.elements[rowNum+ 1].value;
        let start = form.elements[rowNum + 2].value;
        let end = form.elements[rowNum+ 3].value;

        let startDate = new Date();
        startDate.setHours(start.substr(0,2));
        startDate.setMinutes(start.substr(2,2));

        console.log(startDate)

        let endDate = new Date();
        endDate.setHours(end.substr(0,2));
        endDate.setMinutes(end.substr(2,2));
    
        let period = {name:name, start: startDate, end: endDate}
        timePeriodsArrTmp.push(period);
    }
    
    saveJSON(key, timePeriodsArrTmp)
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
    timePeriodsArr.push(workPeriod);

    return timePeriodsArr;
}

window.addEventListener('load', function () {
    key = "placechange"
    // timePeriodsArr = createData();
    timePeriodsArr = loadJSON(key)
    createForm(timePeriodsArr);
  });