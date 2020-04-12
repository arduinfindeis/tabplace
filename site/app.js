function main() {
    var thedate   = new Date();
    var dayofweek = thedate.getDay();
    var hourofday = thedate.getHours();
    function location(){
    // return TRUE if it's Mon through Sat, 3a-6a UTC
        if (dayofweek != 0 &&
        ((hourofday > 9 && hourofday < 17))) {
        return "work";
        }
        return "leisure";
    }

    var locationText = document.getElementById("location"); 
    var timeText = document.getElementById("time");

    timeText.innerHTML = String()

    if (location() === "work") {
        locationText.innerHTML = ("You're at work!");
        document.body.style.backgroundImage = "url('./art/people_in_office.svg')";
    } else if (location() === "leisure") {
        locationText.innerHTML = ("Leisure time!");
        document.body.style.backgroundImage = "url('./art/man_couch_relax.svg')";
    }
}

window.addEventListener('load', function () {
    main()
  })


