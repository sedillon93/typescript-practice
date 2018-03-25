// beforeEach(function () {
//   jasmine.addMatchers({
//     toBePlaying: function () {
//       return {
//         compare: function (actual, expected) {
//           var player = actual;

//           return {
//             pass: player.currentlyPlayingSong === expected && player.isPlaying
//           }
//         }
//       };
//     }
//   });
// });

// courtesy of https://rjzaworski.com/2012/07/testing-with-node-jasmine-and-require-js-part-ii
beforeAll(function(){
  global.initDOM = function () {

    jsdom = require('jsdom');
  
    window = jsdom.jsdom().createWindow('')
    global.document = window.document;
  
    global.addEventListener = window.addEventListener
  }
  console.log('hello')
  global.initDOM();
});

