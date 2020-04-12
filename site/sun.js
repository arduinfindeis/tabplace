function sun() {
    var t = new Date();
    now = t.getTime();
    now_hm = [t.getHours(), t.getMinutes()];
    

    console.log(t, now, now_hm);
    const width = window.innerWidth;
    const height = window.innerHeight;

    function to_minutes(h,m) {
        if (Array.isArray(h)) {
            var hour = h[0];
            var min = h[1];
        } else {
            var hour = h;
            var min = m;
        }
        return(hour * 60 + min);
    }

    function time_duration(begin, end, format) {
        var duration = to_minutes(begin) - to_minutes(end[0], end[1]);
        if (duration < 0) {
            duration = -duration;
        }
        if (format == 'minutes') {
            return duration;
        } else {
            var m = duration % 60;
            var h = (duration - m) / 60;
            return [h,m];
        }
    };


    sun_up = [18,0];
    sun_down = [22,0];


    console.log(width, height);

    function suncalc_x(time, up, down) {
        now_min = to_minutes(time);
        up_min = to_minutes(up);
        down_min = to_minutes(down);
        if (now_min >= up_min && now_min <= down_min) {
            var dur_sun = time_duration(up, down, 'minutes');
            var now_pos = now_min - up_min;
            var dur_pos = now_pos/dur_sun;
            return dur_pos;
        }
        
    };

    function path_curve(x, a) {
        // quadradic
        return a*(x**2);
    };

    function get_max_a(width, height, percent) {
        var max_height = (height/100) * percent;
        var max_x = width/2;
        return max_height/(max_x**2);

    };

    var sun_position_x = width*suncalc_x(now_hm, sun_up, sun_down);
    var sun_position_y = path_curve(sun_position_x-(width/2), get_max_a(width,height,10));

    console.log(sun_position_x, sun_position_y);
    console.log(suncalc_x(now_hm, sun_up, sun_down));
    console.log(get_max_a(width,height,5));
    console.log(height/10, height/20);

    var from_top = document.getElementsByClassName("home-menu pure-menu pure-menu-horizontal pure-menu-fixed")[0].offsetHeight;
    console.log('from top ', from_top);
    let canv = document.createElement("canvas");
    canv.id = "sun";
    canv.width = width;
    canv.height = height/5;
    canv.style.position = "absolute";
    canv.style.top = from_top.toString() + "px";

    document.getElementsByClassName("splash-container")[0].appendChild(canv);
    var sun = document.getElementById("sun");
    var ctx = sun.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = 'yellow'
    ctx.arc(sun_position_x, sun_position_y+50, 25, 0, 360);
    ctx.fill();
    console.log(ctx);


    //tests
    /* 
    ctx.lineWidth = 4;
    ctx.strokeRect(2,2,width-2,(height/5)-2)

    var times = [[6,0],[7,38],[10,3],[12,0],[12,3],[15,21],[17,59]];
    for (let time of times) {
        console.log(time);
        var sun_position_x = width*suncalc_x(time, sun_up, sun_down);
        var sun_position_y = path_curve(sun_position_x-(width/2), get_max_a(width,height,10));

        console.log(sun_position_x, sun_position_y);
        ctx.beginPath();
        ctx.arc(sun_position_x, sun_position_y+50, 25, 0, 360);
        ctx.fill();
    } */
}
window.addEventListener('load', function () {
    sun()
  })