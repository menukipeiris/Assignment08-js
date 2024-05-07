var color_array = ["#EA2027","#16a085","#2980b9","#f1c40f","#833471","#e84393"];

function replaceColors(){
    let lastColor = color_array.pop();
    color_array.unshift(lastColor);

    $("#color1").css({background:color_array[0]});
    $("#color2").css({background:color_array[1]});
    $("#color3").css({background:color_array[2]});
    $("#color4").css({background:color_array[3]});
    $("#color5").css({background:color_array[4]});
    $("#color6").css({background:color_array[5]});
}

    setInterval(replaceColors,1000);