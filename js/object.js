// function createHTML(){
//
//     var div = 'div';
//     var p = 'p';
//     var span = 'span';
//     var buttonStart;
//     var buttonPause;
//     var buttonSplit;
//     var buttonReset;
//     var tag;
//     var parent;
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
//
//
//
// }
// createHTML();
// var div = 'div';
//     var p = 'p';
//     var span = 'span';
//     var buttonStart;
//     var buttonPause;
//     var buttonSplit;
//     var buttonReset;
//     var tag;
//     var parent;
//     var body = document.body;
// function createTags(tag, parent){
//
//     element = document.createElement(tag);
//     parent.appendChild(element);
// }
// createTags(p, div);
// createTags(span, p);
// createTags(div, body);
var parent = document.body;
var div = document.div;


function  createWrapper(tag){
    div = document.createElement(tag);
    div.className = 'wrapper';
    var p = document.createElement('p');
    var span = document.createElement('span');
    span.setAttribute('id', 'timeCount');
    span.appendChild(document.createTextNode('00:00:00:000'));
    p.appendChild(span);
    div.appendChild(p);
    parent.appendChild(div);
    function createButtons( text){
       element = document.createElement('button');
       element.type = 'button';
       element.setAttribute('id', text);
       element.appendChild(document.createTextNode(text));
       div.appendChild(element);
   }
   createButtons( 'start');
   createButtons('pause');
   createButtons( 'split');
   createButtons( 'reset');
   function createTag(tag, text){
       element = document.createElement(tag);
       element.setAttribute ('id', 'split_list');
       div.appendChild(element);
   }
   createTag('ul', 'split_list');
   var startButton = document.getElementById('start');
   startButton.setAttribute('onclick', 'myNewTimer()');
}


createWrapper('div');
