namespace com {
	/**
	 * 底部单个选字组件
	 */


	export class ComSelection extends com.ComFile {

		public con: eui.Group;
		public bg: eui.Image;
		public bg_selected: eui.Image;
		public word: eui.Label;

		public displayWord: string

		private selected: boolean = false
		public selectionIndex: number

		public constructor() {
			super();
			this.skinName = skins.ComSelection
		}

		/* =========== 框架结构代码-start =========== */
		/**
		 * 初始化
		 * @param {any[]} args 构建传参会通过init()传过去
		 */
		protected init(index) {
			// console.info("init", ...args);
			this.selectionIndex = index
		}

		/** 首次创建组件时调用 */
		protected load() {
			// console.info("load");
		}

		/** 每次创建组件都会调用 */
		protected start() {
			// console.info("start");
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
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this)
		}

		/** 移除事件 */
		protected removeEvent() {
			// console.info("removeEvent");
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this)
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

		private onSelect(event: egret.TouchEvent) {
			if (!GameMgr.gameScene.canSelect || !GameMgr.gameScene.started) return
			// 现在已经选择了
			if (this.selected) {
				this.cancelSelect()
			} else {
				// 现在还没被选择
				gTween.fadeIn(this.bg_selected, 300, 1)
				gTween.toScale(this.con, 0.85 / 0.8, 300)
				this.selected = true
			}
			GameMgr.gameScene.dispatchEventWith(gConst.eventType.CLICK_SELECTION, void 0, {
				selected: this.selected,
				word: this.word.text,
				selectionIndex: this.selectionIndex
			})
		}

		public cancelSelect() {
			this.selected = false
			gTween.fadeOut(this.bg_selected, 300, 1)
			gTween.toScale(this.con, 1, 300, void 0, void 0, void 0, {
				callback: () => {
					GameMgr.gameScene.canSelect = true
				}
			})
		}

		public updateWord() {
			this.selected = false
			gTween.fadeOut(this.bg_selected)
			gTween.toScale(this.con, 1, 300)
			gTween.toSmallHide(this.word, 500, 1, 1, egret.Ease.backOut, void 0, {
				callback: () => {
					this.word.text = this.displayWord
					gTween.toBigShow(this.word, 500, 1, 1, egret.Ease.bounceOut, void 0, {
						callback: () => {
							GameMgr.gameScene.canSelect = true
						}
					})
				}
			})
		}

		/* =========== 业务代码-end =========== */
	}
}