
(function(){
	var loggerEl, loggerWrapper;

	window.addEventListener('DOMContentLoaded', function(event){
		var el = document.getElementById('touch-area');
		loggerEl = document.getElementById('logger');
		loggerWrapper = document.getElementById('logger-wrapper');

		// タッチ開始リスナーの登録
		el.addEventListener("touchstart", function(event) {
			stopEvent(event);
			var len = event.changedTouches.length;	
			log("touchstart: touch length = " + len);
			printTouches(event.changedTouches);
		}, false);

		// タッチ移動リスナーの登録
		el.addEventListener("touchmove", function(event) {
			stopEvent(event);
			var len = event.changedTouches.length;	
			log("touchmove: touch length = " + len);
			printTouches(event.changedTouches);
		}, false);

		// タッチ終了リスナーの登録
		el.addEventListener("touchend", function(event) {
			stopEvent(event);
			var len = event.changedTouches.length;	
			log("touchend: touch length = " + len);
			printTouches(event.changedTouches);
		}, false);
	});

	// タッチリストを表示する関数
	var printTouches = function(touchList) {
		var i;
		var len = touchList.length;	
		for (i=0; i<len; i++) {
			var touch = touchList.item(i);
			log(" touch["+i+"] id:" + touch.identifier + ", (" + 
				touch.clientX + ", " + touch.clientY + ")");
		}
	}

	// ログ
	var log = function(msg){
		var line = document.createElement('p');
		line.innerText = msg;
		loggerEl.appendChild(line);
		loggerWrapper.scrollTop = loggerEl.clientHeight;
		
	};

	var stopEvent = function(event) {
		event.preventDefault();
		event.stopPropagation();
	}
})();
