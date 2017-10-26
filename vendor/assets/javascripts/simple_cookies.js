'use strict';

//////////////////
////// simpleCookies object definition
//////////////////
var simpleCookies = {
  init: function() {
    var simpleCookiesButton = document.querySelector('.simple-cookies-accept');

    if (simpleCookiesButton) {
      this.addListener(simpleCookiesButton);
    }
  },

  //////////////////
  ////// Event listener with support for old browsers
  //////////////////
  addListener: function(target) {
    //////////////////
  	////// Support for old browsers IE < 9
  	//////////////////
    if (target.attachEvent) {
      target.attachEvent('onclick', this.setCookie);
    } else {
      target.addEventListener('click', this.setCookie, false);
    }
  },

  //////////////////
  ////// Method to return cookie's value
  //////////////////
  getCookies: function() {
    var name = "simple_cookies_consented=",
        decodedCookie = decodeURIComponent(document.cookie),
        cookieArray = decodedCookie.split(';');

    for(var i = 0; i < cookieArray.length; i++) {
      var c = cookieArray[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  //////////////////
  ////// Set cookie with one year validity
  //////////////////
  setCookie: function(cookie) {
    var date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    var value = true;

    document.cookie = "simple_cookies_consented=" + value + ";" + expires + ";path=/";

    var container = document.getElementById('simple-cookies');
    container.parentNode.removeChild(container);
  }
};

(function() {
  //////////////////
	////// Support for old browsers IE < 9
	//////////////////
  if (window.addEventListener) {
    window.addEventListener('load', function(){
      simpleCookies.init();
    }, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', function(){
      simpleCookies.init();
    });
  }
})();
