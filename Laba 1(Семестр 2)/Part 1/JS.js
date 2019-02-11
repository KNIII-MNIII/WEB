var text = prompt("Введиет количество секунд");
var len = text
for (var i = 0; i <= len; i++){
    if (text < 3600){
        document.write(text);
        break
    }
    else {
        text -=3600;

    }
}

//var date = new Date();
//var d =  date.getMinutes() * 60;

//alert(d + " Секунд прошло с последнего полного часа")
