function main() {

    let currTime   = new Date();

    console.log(timePeriodsArr)

    function getCurrentPeriod(timePeriodsArr, currTime){
        for (const period of timePeriodsArr){
            if (currTime > period.start && currTime < period.end){
                return period;
            }
        }
    }
    period = getCurrentPeriod(timePeriodsArr, currTime);
    console.log(period)

    let locationText = document.getElementById("location"); 
    let timeText = document.getElementById("time");

    timeText.innerHTML = String()
    const [hh, mm, ss] = getTimeDifference(currTime, period.end)

    if (period.name === "work") {
        locationText.innerHTML = ("You're at work!");
        timeText.innerHTML = `Currently at ${period.name}: ${hh}h ${mm}mins remaining`;
        document.body.style.backgroundImage = "url('./art/people_in_office.svg')";
    } else if (period.name === "leisure") {
        locationText.innerHTML = ("Leisure time!");
        timeText.innerHTML = `Currently off work: ${hh}h ${mm}mins remaining`;
        document.body.style.backgroundImage = "url('./art/man_couch_relax.svg')";
    }
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

function getTimeDifference(date1, date2) {

    let diff = date2.getTime() - date1.getTime();

    let msec = diff;
    let hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    let mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    let ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    return [hh, mm, ss]
}

window.addEventListener('load', function () {
    key = "placechange"
    timePeriodsArr = loadJSON(key)
    // timePeriodsArr = createData();
    main()
  })


