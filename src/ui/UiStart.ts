namespace ui {
	/**
	 * UI文件（空，可作模板用）
	 */
	export class UiStart extends ui.UiFile {
		public className: string; //不需要重写，自动设置
		public bg: eui.Rect;
		public chat: eui.Group;
		public btn: eui.Image;

		public constructor() {
			super();
			this.skinName = skins.UiStart;
		}

		/* =========== 框架结构代码-start =========== */
		/**
		 * 初始化
		 * @param {any[]} args open()传参会通过init()传过去
		 */
		protected init(...args: any[]) {
			// console.info("init", ...args);
		}

		/** 首次打开界面时调用 */
		protected load() {
			// console.info("load");
		}

		/** 每次打开界面都会调用 */
		protected start() {
			// console.info("start");
			this.enter()
		}

		/** 每次结束界面都会调用 */
		protected stop() {
			// console.info("stop");
		}

		/** 监听界面，每帧都会调用 */
		protected update() {
			// console.info("update");
		}

		/** 注册事件 */
		protected addEvent() {
			// console.info("addEvent");
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
		}

		/** 移除事件 */
		protected removeEvent() {
			// console.info("removeEvent");
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
		}

		/** 窗口大小改变时调用 */
		protected resizeView(): void {
			// console.info("resizeView", this.width, this.height);
			// var s1: number = this.width / this.con.width;
			// var s2: number = this.height / this.con.height;
			// this.con.scaleX = this.con.scaleY = Math.max(s1, s2);

			if (this.screenType == gConst.screenType.VERTICAL) {
				//竖屏
				switch (this.mobileType) {
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
				switch (this.mobileType) {
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
		protected rotateView(): void {
			// console.info("rotateView", this.screenType);
			if (this.screenType == gConst.screenType.VERTICAL) {
				//竖屏
			} else {
				//横屏
			}
		}
		/* =========== 框架结构代码-end =========== */


		/* =========== 业务代码-start =========== */
		private enter() {
			gTween.fadeIn(this.bg)
			gTween.toTopShow(this.chat, 800, 0.5 * this.height, void 0, void 0, egret.Ease.bounceOut, void 0, {
				callback: () => {
					gTween.loopAlpha(this.btn, 0, 500, 1)
				}
			})
		}

		private onClose() {
			gTween.fadeOut(this, 500, 1, void 0, void 0, {
				callback: () => {
					if(this.parent){
						this.close()
					}
				}
			})
		}
		/* =========== 业务代码-end =========== */
	}
}