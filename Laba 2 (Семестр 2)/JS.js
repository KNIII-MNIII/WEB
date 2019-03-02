function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var obj = {};

alert( isEmpty(obj) ); // У меня тут пусто


obj.name = "Алексей"; // Добавил имя
obj.age = "73"; // Добавил возраст
obj["10:00"] = "Проект из казахстана"; // Добавил время начала

alert(obj.age);// Возраст клиента
alert(obj.name);// Имя клиента
alert(obj["10:00"]);// Время

alert( isEmpty(obj) ); // Теперь у меня есть обьект
