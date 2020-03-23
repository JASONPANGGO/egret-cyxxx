namespace ui {
	/**
	 * 过关画面
	 */
	export class UiPass extends ui.UiFile {
		public className: string; //不需要重写，自动设置
		public out_con: eui.Group;
		public bg: eui.Rect;
		public moon_con: eui.Group;
		public congrats: eui.Image;
		public explain: eui.Label;
		public btn: eui.Image;

		private explainText: string

		public constructor() {
			super();
			this.skinName = skins.UiPass;
		}

		/* =========== 框架结构代码-start =========== */
		/**
		 * 初始化
		 * @param {any[]} args open()传参会通过init()传过去
		 */
		protected init(explainText: string) {
			// console.info("init", ...args);
			this.explainText = explainText
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
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextLevel, this)
		}

		/** 移除事件 */
		protected removeEvent() {
			// console.info("removeEvent");
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextLevel, this)
		}

		/** 窗口大小改变时调用 */
		protected resizeView(): void {
			// console.info("resizeView", this.width, this.height);

			// this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height / this.out_con.height)

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
			this.visible = true
			this.explain.text = ''
			let bone: com.ComBones = new com.ComBones()
			bone.setData(this.moon_con, 'moon')
			bone.setPos({ x: 0.5 * this.moon_con.width, y: 0.5 * this.moon_con.height })
			bone.play('newAnimation')

			gTween.fadeIn(this.bg, 300, void 0, void 0, void 0, {
				callback: () => {
					gTween.toBigShow(this.congrats, 300, 1, 1, egret.Ease.bounceOut)
					let i = 0
					let timer = egret.setInterval(() => {
						if (i < this.explainText.length) {
							this.explain.text = this.explain.text + this.explainText[i]
							i++
						} else {
							egret.clearInterval(timer)
						}
					}, this, 50)
					gTween.loopAlpha(this.btn, 0, 600, 1)
				}
			})
		}

		private nextLevel() {
			gTween.fadeOut(this, 500, 1, void 0, void 0, {
				callback: () => {

					console.log('close')
					this.close()
					this.congrats.visible = false
					GameMgr.gameScene.nextLevel()
				}
			})
		}

		/* =========== 业务代码-end =========== */
	}
}