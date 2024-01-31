
function myFunction() {
  alert('Час робити покупки!');
}



// // Функція, яка створює таймер, який запускається в заданий час
// function createAlarm(date, time, message) {
//     let alarmTime = new Date(date + " " + time).getTime(); // Перетворюємо дату та час в мілісекунди

//     if (alarmTime < Date.now()) {    // Перевіряємо, чи час не минув
//       alert("Неможливо створити будильник на минулий час");
//       return;
//     }
//     let timerId = setTimeout(showAlarm, alarmTime - Date.now(), message, timerId);// Створюємо таймер, який викликає функцію showAlarm
//     return timerId;     // Повертаємо ідентифікатор таймера, щоб можна було його скасувати
//   }
  
//   // Функція, яка показує повідомлення будильника та видаляє таймер
//   function showAlarm(message, timerId) {
//     alert(message);
//     // Видаляємо таймер
//     clearTimeout(timerId);
//   }
  
//   // Функція, яка скасовує будильник за ідентифікатором таймера
//   function cancelAlarm(timerId) {
//     // Видаляємо таймер
//     clearTimeout(timerId);
//     alert("Будильник скасовано");
//   }
  
//   function setAlarm(){
//     let date = new Date().toLocaleDateString(); // Отримуємо поточну дату
//     let time = new Date(Date.now() + 30000).toLocaleTimeString(); // Отримуємо поточний час плюс 30 секунд
//     let message = "Час робити покупку!"; // Повідомлення будильника
//     let alarmId = createAlarm(date, time, message); // Створюємо будильник і зберігаємо його ідентифікатор
//     showAlarm(message, alarmId);
// }
  
  
//   // Скасовуємо будильник через 10 секунд
//   //setTimeout(cancelAlarm, 10000, alarmId); // Викликаємо функцію cancelAlarm з параметром alarmId