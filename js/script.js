function myNewTimer(){
    var currentDate,
        temp,
        timer,
        hours,
        minutes,
        seconds,
        time,
        milliseconds;

    var pauseDate = 0;
    var delta = 0;
    var counter = 0;
    var currentTimer = 0;
    var splitCounter = 0;
    var pause = document.getElementById('pause');
    var reset = document.getElementById('reset');
    var split = document.getElementById('split');
    var splitClick = document.getElementById('split');
    var initialDate = new Date().getTime();
    var start = document.getElementById('start');
    start.addEventListener('click', startTimer());
     function startTimer (){

         initialDate = new Date().getTime();
         timeCount();
         timer = setInterval(timeCount, 15);
         document.getElementById('start').style.display = 'none';
         document.getElementById('pause').style.display = 'inline-block';
         pause.addEventListener('click', clickCounter);
         reset.addEventListener('click', resetTimer);
         split.addEventListener('click', splitTimer);

     }

     function clickCounter() {
         counter++;

         if (counter % 2 === 0) {

             document.getElementById('pause').innerHTML = 'Continue';
             startTimer();
         }

         else {

             document.getElementById('pause').innerHTML = 'Pause';
             clearInterval(timer);
             timeCount();
        }
         return counter;
     }

     function timeCount(){

         currentDate = new Date().getTime();
         var time = new Date(currentTimer);
         delta = currentDate - initialDate;
         currentTimer  += delta;
         initialDate = currentDate;
         milliseconds = time.getMilliseconds();
         seconds = time.getSeconds();
         minutes = time.getMinutes();
         hours = time.getUTCHours();

          if (milliseconds < 100) {
              milliseconds = '0' + milliseconds;
          }
          if (seconds < 10) {
              seconds = '0' + seconds;
          }
          if (minutes < 10) {
              minutes = '0' + minutes;
          }
          if (hours < 10) {
              hours = '0' + hours;
          }
          temp = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
          if (temp != document.getElementById('timeCount').innerHTML) {
              document.getElementById('timeCount').innerHTML = temp;
          }
     }

     function splitTimer() {

         var splitList = document.getElementById('split_list');
         var splitListItem = document.createElement('li');
         splitCounter++;
         timeCount();
         splitClick.addEventListener('click', splitTimer );
         splitListItem.appendChild(document.createTextNode('split' + splitCounter + ' ' + temp));
         splitList.appendChild(splitListItem);
         clearInterval(timer);
         return splitCounter;
     }

     function resetTimer(){

         clearInterval(timer);
         temp = '00:00:00:000';
         counter = 0;
         currentTimer = 0;
         splitCounter = 0;
         time = 0;
         delta = 0;
         document.getElementById('timeCount').innerHTML = temp;
         document.getElementById('start').innerHTML = 'Start';
         document.getElementById('pause').style.display = 'none';
         document.getElementById('start').style.display = 'inline-block';
         document.getElementById('split_list').innerHTML = '';
     }
}
// =======================================================================================
// function createHTML(){
//
//     var div;
//     var p;
//     var span;
//     var buttonStart;
//     var buttonPause;
//     var buttonSplit;
//     var buttonReset;
//     var body = document.body;
//     var buttons = {
//         text1 : 'start',
//         text2 : 'pause',
//         text3 : 'split',
//         text4 : 'reset',
//         createButtons : function (element, text){
//             element = document.createElement('button');
//             element.type = 'button';
//             element.setAttribute('id', text);
//             element.appendChild(document.createTextNode(text));
//             return element;
//
//         }
//     };
//     function createTags(tag, parent){
//
//         element = document.createElement(tag);
//         parent.appendChild(element);
//         return element;
//     }
//     createTags(div, body);
//
//      createTags(p, div);
//
//      createTags(span, p);
//
//
//
// }
// createHTML();
