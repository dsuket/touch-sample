
(function(exports){
	window.addEventListener('DOMContentLoaded', function(event){
		logger.init();
		var el = document.getElementById('touch-area');

		// タッチ開始リスナーの登録
		el.addEventListener("touchstart", function(event) {
			stopEvent(event);
			logger.log("touchstart:");
			printTouches(event.changedTouches);
		}, false);

		// タッチ移動リスナーの登録
		el.addEventListener("touchmove", function(event) {
			stopEvent(event);
			logger.log("touchmove:");
			printTouches(event.changedTouches);
		}, false);

		// タッチ終了リスナーの登録
		el.addEventListener("touchend", function(event) {
			stopEvent(event);
			logger.log("touchend:");
			printTouches(event.changedTouches);
		}, false);
	});

	// イベントの停止
	var stopEvent = function(event) {
		event.preventDefault();
		event.stopPropagation();
	};

	// タッチリストを表示する関数
	var printTouches = function(touchList) {
		var i=0, len = touchList.length;
		for (; i<len; i++) {
			var touch = touchList.item(i);
			logger.log("- " + touch.identifier + ": (" + 
				touch.screenX + ", " + touch.screenY + "), (" +
				touch.pageX + ", " + touch.pageY + "), (" + 
				touch.clientX + ", " + touch.clientY + ")");
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
	exports.logger = logger;

})(window);
