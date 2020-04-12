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