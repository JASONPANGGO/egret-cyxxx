namespace scene {
	/**
	 * 游戏场景
	 */

	interface Level {
		level: number
		key: string
		selections: string
		explain: string
		pic: string
	}

	export class GameScene extends scene.GameBase {

		// 当前状态是否可以操作选择
		public canSelect: boolean = false
		public started: boolean = false

		public bg: eui.Image;

		// 游戏主体包裹
		public out_con: eui.Group;

		public pic_con: eui.Group;

		public con: eui.Group;

		// 四个输入
		public input_con: eui.Group;
		public input0: com.ComInput;
		public input1: com.ComInput;
		public input2: com.ComInput;
		public input3: com.ComInput;

		public line: eui.Image;

		public words_con: eui.Group;

		// 选项
		public selection_0: com.ComSelection;
		public selection_1: com.ComSelection;
		public selection_2: com.ComSelection;
		public selection_3: com.ComSelection;
		public selection_4: com.ComSelection;
		public selection_5: com.ComSelection;
		public selection_6: com.ComSelection;
		public selection_7: com.ComSelection;
		public selection_8: com.ComSelection;
		public selection_9: com.ComSelection;
		public selection_10: com.ComSelection;
		public selection_11: com.ComSelection;
		public selection_12: com.ComSelection;
		public selection_13: com.ComSelection;
		public selection_14: com.ComSelection;
		public selection_15: com.ComSelection;
		public selection_16: com.ComSelection;
		public selection_17: com.ComSelection;
		public selection_18: com.ComSelection;
		public selection_19: com.ComSelection;


		private UiStart: ui.UiStart
		private UiPass: ui.UiPass

		// 结束页面
		public end_con: eui.Group;
		public end_btn: eui.Image;
		public end_logo: eui.Image;
		public end_title: eui.Image;



		public constructor() {
			super();
			this.skinName = skins.GameScene;
		}

		/* =========== 框架结构代码-start =========== */
		/**
		 * 初始化
		 * @param {any[]} args open()传参会通过init()传过去
		 */
		public init(...args: any[]) {
			// console.info("init", ...args);
		}

		/** 首次打开场景时调用 */
		protected load() {
			// console.info("load");
		}

		/** 每次打开场景都会调用 */
		protected start() {
			// console.info("start");
			this.end_con.visible = false
			this.canSelect = false
			this.openFirst();
			this.loadBones()
			this.loadLevel(0)
			this.initCom()

			this.enter()
		}

		/** 每次结束场景都会调用 */
		protected stop() {
			// console.info("stop");
		}

		/** 每帧都会调用 */
		protected update() {
			// console.info("update");
		}

		/** 注册事件 */
		protected addEvent() {
			// console.info("addEvent");
			this.addEventListener(gConst.eventType.CLICK_SELECTION, this.onSelect, this)
			this.end_logo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInstall, this)
			this.end_title.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInstall, this)
			this.end_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInstall, this)
		}

		/** 移除事件 */
		protected removeEvent() {
			// console.info("removeEvent");
			this.removeEventListener(gConst.eventType.CLICK_SELECTION, this.onSelect, this)
		}

		/** 窗口大小改变时调用 */
		public resizeView(): void {
			// console.info("resizeView", this.width, this.height, GameMgr.screenType, GameMgr.mobileType);
			this.dispatchEventWith(gConst.eventType.RESIZE_VIEW);

			const baseScale: number = gConst.mobileByScale[GameMgr.screenType][GameMgr.mobileType];
			const bg = this.bg

			bg.scaleX = bg.scaleY = Math.max(this.width / bg.width, this.height / bg.height)

			if (GameMgr.screenType == gConst.screenType.VERTICAL) {
				//竖屏
				// this.pic_con.scaleX = this.pic_con.scaleY = this.con.scaleX = this.con.scaleY = 1
				this.out_con.verticalCenter = NaN
				this.pic_con.left = this.con.right = NaN

				this.out_con.y = 0.25 * this.height
				this.out_con.width = 750
				this.out_con.height = 1091
				this.pic_con.top = this.con.bottom = this.pic_con.horizontalCenter = this.con.horizontalCenter = 0



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

				// this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height * 0.7 / this.out_con.height)
				this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height * 0.7 / this.out_con.height)

			} else {
				//横屏
				// this.out_con.scaleX = this.out_con.scaleY = 1
				// this.out_con.y = 0
				// this.pic_con.horizontalCenter = NaN
				// this.con.horizontalCenter = NaN
				// this.pic_con.top = NaN
				// this.pic_con.left = this.con.right = 50
				// this.pic_con.bottom = this.con.bottom = 50
				// this.out_con.width = this.width
				// this.out_con.height = this.height

				this.con.horizontalCenter = this.pic_con.horizontalCenter = NaN
				this.out_con.width = this.pic_con.width + this.con.width + 100
				this.out_con.height = this.con.height
				this.out_con.y = 0
				this.out_con.verticalCenter = 0
				this.pic_con.left = 0
				this.pic_con.top = NaN
				this.pic_con.bottom = 60
				this.con.right = 0
				this.con.bottom = 0

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
				// this.pic_con.scaleX = this.pic_con.scaleY = this.con.scaleX = this.con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height * 0.7 / this.out_con.height)
				this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width * 0.8 / this.out_con.width, 1)
			}
		}

		/** 屏幕横竖屏转换时调用 */
		public rotateView() {
			// console.info("GameScene.rotateView", GameMgr.screenType);
			this.dispatchEventWith(gConst.eventType.ROTATE_VIEW);

			if (GameMgr.screenType == gConst.screenType.VERTICAL) {
				//竖屏
			} else {
				//横屏
			}
		}
		/* =========== 框架结构代码-end =========== */


		/* =========== 业务代码-start =========== */


		private currentLevelIndex: number = 0
		private currentLevel: Level
		private picBone: com.ComBones

		private enter() {
			gTween.toLeftShow(this.words_con, 1000, void 0, void 0, void 0, egret.Ease.backOut)
			gTween.toLeftShow(this.input_con, 800, void 0, void 0, void 0, egret.Ease.backOut)
			gTween.toRightShow(this.pic_con, 1000, void 0, void 0, void 0, egret.Ease.backOut, void 0, {
				callback: () => {
					gTween.toScaleX(this.line, 1, 500, 0, egret.Ease.quadOut, void 0, {
						callback: () => {
							this.openStart()
						}
					})
				}
			})
		}

		private openStart() {
			this.UiStart = gUiMgr.create(ui.UiStart) as ui.UiStart
			this.UiStart.open()
		}

		private initCom() {
			this.words_con.$children.forEach((child, index) => {
				this['selection_' + index].open(index)
			})
			this.input_con.$children.forEach((child, index) => {
				this['input' + index].open()
			})
		}

		private loadLevel(level: number) {
			this.currentLevel = gConst.levels[this.currentLevelIndex]
			this.currentInputIndex = 0
			this.loadPic(this.currentLevel.pic)
			this.loadSelections(this.currentLevel.selections)
			this.clearInput()
		}

		private loadBones() {
			this.picBone = new com.ComBones()
			this.picBone.setData(this.pic_con, 'pic')
		}

		private loadPic(picName: string) {
			if (this.currentLevelIndex == 0) {
				this.picBone.play(picName, 0)
			} else {
				gTween.fadeOut(this.pic_con, 300, 1, void 0, void 0, {
					callback: () => {
						gTween.fadeIn(this.pic_con, 300, 1)
						this.picBone.play(picName, 0)
					}
				})
			}
		}

		private wordsArray: string[] = []
		private loadSelections(selections: string) {
			const s = selections.split(' ')
			s.sort((a, b) => Math.random() - 0.5)
			this.wordsArray = s
			s.forEach((word, index) => {
				this['selection_' + index].displayWord = word
				this['selection_' + index].updateWord()
			})
		}

		private clearInput() {
			for (let i = 0; i < this.input_con.$children.length; i++) {
				this['input' + i].word.text = ''
			}
		}

		private currentInputIndex: number = 0
		private selectedWord: { word: string, selectionIndex: number }[] = []

		private onSelect(event: egret.Event) {
			if (!this.canSelect || !this.started) return
			gSoundMgr.playEff('click')
			const data = event.data
			// 选中
			if (data.selected) {
				// 未满四字
				if (this.currentInputIndex < this.input_con.$children.length) {
					this['input' + this.currentInputIndex].write(data.word)
					this.selectedWord.push({ word: data.word, selectionIndex: data.selectionIndex })
					this.currentInputIndex++
					this.showGuide()
				}
				// 已满四字
				if (this.currentInputIndex >= this.input_con.$children.length) {
					this.canSelect = false
					const answer = this.selectedWord.map(w => w.word).join('')
					if (answer === this.currentLevel.key) {
						this.rightAnswer()
					} else {
						this.wrongAnswer()
					}
				}

			} else {
				// 取消选中
				this.clearSelect(data.word)
			}

		}

		public clearSelect(selectedWord: string) {
			// 取消选中
			let canClear: boolean = false
			let beginIndex: number
			this.selectedWord.forEach((word, index) => {
				if (selectedWord === word.word) {
					canClear = true
					beginIndex = index
				}
				if (canClear) {
					this['input' + index].clear()
					this['selection_' + word.selectionIndex].cancelSelect()
				}
			})
			this.selectedWord.splice(beginIndex)
			this.currentInputIndex = this.selectedWord.length

			this.showGuide()
		}

		private wrongAnswer() {
			gSoundMgr.playEff('fail')
			const shakeTime: number = 300
			this.selectedWord.forEach((child, index) => {
				this['input' + index].word.textColor = gConst.gameConfig.wrongColor
			})
			let st: util.ShakeTool = new util.ShakeTool()
			st.shakeObj(this.input_con, shakeTime, 10, 20, 0)
			egret.setTimeout(() => {
				this.selectedWord.forEach((word, index) => {
					this['input' + index].clear()
					this['selection_' + word.selectionIndex].cancelSelect()
				})
				this.currentInputIndex = 0
				this.selectedWord = []
				this.showGuide()
			}, this, shakeTime)
		}

		private rightAnswer() {
			gSoundMgr.playEff('right')
			this.hideGuide()
			this.input_con.$children.forEach((child, index) => {
				this['input' + index].correct()
			})
			this.currentInputIndex = 0
			this.selectedWord = []
			this.openPass()
		}

		private openPass() {
			this.UiPass = gUiMgr.create(ui.UiPass) as ui.UiPass
			this.UiPass.open(this.currentLevel.explain)
		}

		public nextLevel() {
			this.input_con.$children.forEach((child, index) => {
				this['input' + index].clear()
			})
			this.currentLevelIndex++
			if (this.currentLevelIndex >= gConst.levels.length) {
				this.openEnd()
			} else {
				this.loadLevel(this.currentLevelIndex)
				this.showGuide()
			}
		}

		public guide: com.ComGuide; //引导组件

		/** 显示引导 */
		public showGuide() {
			if (this.guide) {
				this.guide.over()
			}

			if (!this.guide) {
				this.guide = new com.ComGuide();
			}

			const key: string = this.currentLevel.key
			let guideTarget: egret.DisplayObject

			for (let i = 0; i <= this.selectedWord.length; i++) {
				if (!this.selectedWord[i]) {
					guideTarget = this['selection_' + this.wordsArray.indexOf(key[i])]
					break
				}
				if (this.selectedWord[i].word !== key[i]) {
					guideTarget = this['input' + i]
					break
				}
			}

			this.guide.open();
			this.guide.setData(3000, { target1: guideTarget }, this.out_con, {
				pressT: 500,
				liftT: 500
			});
			this.guide.play();
		}

		/** 隐藏引导 */
		public hideGuide() {
			if (!this.guide) {
				return;
			}
			this.guide.over();
		}


		/** 打开结束界面 */
		public openEnd(isShowEnd: boolean = true) {
			// console.info("openEnd");
			// egret.clearTimeout(this.endDelay);
			if (GameMgr.isEnd) {
				return;
			}
			Mapi.gameEnd();
			GameMgr.isEnd = true;
			this.hideGuide();
			this.removeEvent();
			this.closeFirst()
			this.end_con.visible = true
			gTween.toRightHide(this.out_con, 500, void 0, void 0, void 0, void 0, void 0, {
				callback: () => {
					this.end_logo.rotation = 20
					gTween.toBottomShow(this.end_logo, 500, 0.5 * this.height, void 0, void 0, egret.Ease.bounceOut, { duration: 50 }, {
						callback: () => {
							egret.Tween.get(this.end_logo).to({
								rotation: 0
							}, 300)
							egret.setTimeout(() => {
								gTween.swing(this.end_logo, 5, 300)
							}, this, 1000)
						}
					})
					gTween.toBigShow(this.end_title)
					gTween.toBigShow(this.end_btn, 300, 1, 1, egret.Ease.bounceOut, { duration: 500 }, {
						callback: () => {
							gTween.loopScale(this.end_btn, 1.2)
						}
					})
				}
			})

		}

		/* =========== 业务代码-end =========== */
	}
}