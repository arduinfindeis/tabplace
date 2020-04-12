store = window.localStorage;

function saveJSON(key, value) {
    string = JSON.stringify(value);+
    console.log(string);
    store.setItem(key, string);
    return 'saved'
}

function loadJSON(key) {
    string = store.getItem(key);
    array = JSON.parse(string);
    console.log(array);
    return array;
}

function loadPeriods(key) {
    let tmp_array = loadJSON(key);
    for (line of tmp_array) {
        let start = line.start;
        let end = line.end;
        console.log(line);
        line.start = new Date(start);
        line.end = new Date(end);
        console.log(line);
    }
    console.log(tmp_array);
    return tmp_array;
}