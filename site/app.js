function main() {
    var thedate   = new Date();
    var dayofweek = thedate.getDay();
    var hourofday = thedate.getHours();
    function atWork(){
    // return TRUE if it's Mon through Sat, 3a-6a UTC
        if (dayofweek != 0 &&
        ((hourofday > 9 && hourofday < 17))) {
        return "work";
        }
        return "leisure";
    }

    var locationText = document.getElementById("location"); 

    if (atWork() === "work") {
        locationText.innerHTML = ("You're at work!");
    } else if (atWork() === "leisure") {
        locationText.innerHTML = ("Leisure time!");
    } 
}

window.addEventListener('load', function () {
    main()
  })


