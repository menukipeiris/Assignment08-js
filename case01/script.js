var array = ["A","B","C","D","E","F"];

function replaceValues(){
    let lastValue = array.pop();
    array.unshift(lastValue);

    $("#value1").text(array[0]);
    $("#value2").text(array[1]);
    $("#value3").text(array[2]);
    $("#value4").text(array[3]);
    $("#value5").text(array[4]);
    $("#value6").text(array[5]);
}

setInterval(replaceValues,1000);