namespace com {
	/**
	 * 单个输入框
	 */
	export class ComInput extends com.ComFile {
		public bg: eui.Image;
		public word: eui.Label;

		public constructor() {
			super();
			this.skinName = skins.ComInput;
		}

		/* =========== 框架结构代码-start =========== */
		/**
		 * 初始化
		 * @param {any[]} args 构建传参会通过init()传过去
		 */
		protected init(...args: any[]) {
			// console.info("init", ...args);
		}

		/** 首次创建组件时调用 */
		protected load() {
			// console.info("load");

			this.skinName = skins.ComInput;
		}

		/** 每次创建组件都会调用 */
		protected start() {
			// console.info("start");
			this.word.text = ''
		}

		/** 每次结束组件都会调用 */
		protected stop() {
			// console.info("stop");
		}

		/** 监听组件，每帧都会调用 */
		protected update() {
			// console.info("update");
		}

		/** 注册事件 */
		protected addEvent() {
			// console.info("addEvent");
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClear, this)
		}

		/** 移除事件 */
		protected removeEvent() {
			// console.info("removeEvent");
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClear, this)
		}

		/** 窗口大小改变时调用 */
		protected resizeView(event?: egret.Event) {
			// console.info("resizeView", event, GameMgr.gameview.width, GameMgr.gameview.height);
			if (GameMgr.screenType == gConst.screenType.VERTICAL) {
				//竖屏
				switch (GameMgr.mobileType) {
					//iPhoneX或以上
					case gConst.mobileType.IPHONE_X:
						break;
					//iPhone8或以下
					case gConst.mobileType.IPHONE_8:
						break;
					//iPad或其它
					case gConst.mobileType.IPAD:
						break;
				}
			} else {
				//横屏
				switch (GameMgr.mobileType) {
					//iPhoneX或以上
					case gConst.mobileType.IPHONE_X:
						break;
					//iPhone8或以下
					case gConst.mobileType.IPHONE_8:
						break;
					//iPad或其它
					case gConst.mobileType.IPAD:
						break;
				}
			}
		}

		/** 屏幕横竖屏转换时调用 */
		protected rotateView(event: egret.Event) {
			// console.info("rotateView", event, GameMgr.screenType, GameMgr.mobileType);
			if (GameMgr.screenType == gConst.screenType.VERTICAL) {
				//竖屏
			} else {
				//横屏
			}
		}
		/* =========== 框架结构代码-end =========== */


		/* =========== 业务代码-start =========== */

		public write(word: string) {
			this.word.text = word
			this.word.textColor = gConst.gameConfig.inputColor
			gTween.toBigShow(this.word, 300, 1, 1, egret.Ease.bounceOut)
		}

		public clear() {
			gTween.toSmallHide(this.word, 300, 1, 1, egret.Ease.bounceOut, void 0, {
				callback: () => {
					this.word.text = ''
					this.word.textColor = gConst.gameConfig.inputColor
				}
			})
		}

		private clickClear() {
			if (!GameMgr.gameScene.started || !GameMgr.gameScene.canSelect) return
			GameMgr.gameScene.clearSelect(this.word.text)
		}

		public correct() {
			this.word.textColor = gConst.gameConfig.rightColor
		}

		/* =========== 业务代码-end =========== */
	}
}