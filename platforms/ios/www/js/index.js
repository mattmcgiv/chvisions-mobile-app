/*
App-o-Mat jQuery Mobile Cordova starter template
https://github.com/app-o-mat/jqm-cordova-template-project
http://app-o-mat.com

MIT License
https://github.com/app-o-mat/jqm-cordova-template-project/LICENSE.md
*/

var antym = {};

antym.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },


    onDeviceReady: function() {
		FastClick.attach(document.body);
		document.addEventListener("backbutton", this.onBackKeyDown, false);
    },
    
    // Handle the back button
    //
    onBackKeyDown: function () {
    	console.log('Back key pressed. Source: index.js.');
    	//window.location.href = "#home";
    }    
    

};
