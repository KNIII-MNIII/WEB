var text = prompt("Введите текст на английском");
var arr = new Array();
var num = 0;
for (var i = 0; i <=text.length; i++) {
  if (text[i] == "a") {
    document.write(text[i]+ "- Это нам подходит" + "<br />")
    arr[num++] = i
  }
  else {
    document.write(text[i]+ "- Это нам НЕ подходит" + "<br />")
  }
}
document.write(arr);
