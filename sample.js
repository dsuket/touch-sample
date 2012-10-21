
(function(){
	window.addEventListener('DOMContentLoaded', function(event){
		var el = document.getElementById('touch-area');
		logger.init();

		// タッチ開始リスナーの登録
		el.addEventListener("touchstart", function(event) {
			stopEvent(event);
			var len = event.changedTouches.length;	
			logger.log("touchstart: touch length = " + len);
			printTouches(event.changedTouches);
		}, false);

		// タッチ移動リスナーの登録
		el.addEventListener("touchmove", function(event) {
			stopEvent(event);
			var len = event.changedTouches.length;	
			logger.log("touchmove: touch length = " + len);
			printTouches(event.changedTouches);
		}, false);

		// タッチ終了リスナーの登録
		el.addEventListener("touchend", function(event) {
			stopEvent(event);
			var len = event.changedTouches.length;	
			logger.log("touchend: touch length = " + len);
			printTouches(event.changedTouches);
		}, false);
	});

	// タッチリストを表示する関数
	var printTouches = function(touchList) {
		var i;
		var len = touchList.length;	
		for (i=0; i<len; i++) {
			var touch = touchList.item(i);
			logger.log("- touch["+i+"]: " + touch.identifier + ", (" + 
				touch.pageX + ", " + touch.pageY + "), (" + 
				touch.clientX + ", " + touch.clientY + "), (" +
				touch.screenX + ", " + touch.screenY + ")");
		}
	}

	// ログ
	var logger = {
		loggerEl: null,
		loggerWrapper: null,

		init: function() {
			this.loggerEl = document.getElementById('logger');
			this.loggerWrapper = document.getElementById('logger-wrapper');
		},

		log: function(msg) {
			var line = document.createElement('p');
			line.innerText = msg;
			this.loggerEl.appendChild(line);
			this.loggerWrapper.scrollTop = this.loggerEl.clientHeight;
		}
	};
	window.logger = logger;

	var stopEvent = function(event) {
		event.preventDefault();
		event.stopPropagation();
	};

})();
