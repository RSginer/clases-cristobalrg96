'use strict';

$(document).ready(function () {
   var menuBtn = $('.menu-button')[0];
   var leftMenu = $('.left-menu')[0];

   $(menuBtn).on('click', function() {
        $(leftMenu).toggleClass('open');
   });
});


