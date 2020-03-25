var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scene;
(function (scene) {
    /**
     * 游戏场景
     */
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super.call(this) || this;
            // 当前状态是否可以操作选择
            _this.canSelect = false;
            _this.started = false;
            /* =========== 框架结构代码-end =========== */
            /* =========== 业务代码-start =========== */
            _this.currentLevelIndex = 0;
            _this.wordsArray = [];
            _this.currentInputIndex = 0;
            _this.selectedWord = [];
            _this.skinName = skins.GameScene;
            return _this;
        }
        /* =========== 框架结构代码-start =========== */
        /**
         * 初始化
         * @param {any[]} args open()传参会通过init()传过去
         */
        GameScene.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // console.info("init", ...args);
        };
        /** 首次打开场景时调用 */
        GameScene.prototype.load = function () {
            // console.info("load");
        };
        /** 每次打开场景都会调用 */
        GameScene.prototype.start = function () {
            // console.info("start");
            this.end_con.visible = false;
            this.canSelect = false;
            this.openFirst();
            this.loadBones();
            this.loadLevel(0);
            this.initCom();
            this.enter();
        };
        /** 每次结束场景都会调用 */
        GameScene.prototype.stop = function () {
            // console.info("stop");
        };
        /** 每帧都会调用 */
        GameScene.prototype.update = function () {
            // console.info("update");
        };
        /** 注册事件 */
        GameScene.prototype.addEvent = function () {
            // console.info("addEvent");
            this.addEventListener(gConst.eventType.CLICK_SELECTION, this.onSelect, this);
            this.end_logo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInstall, this);
            this.end_title.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInstall, this);
            this.end_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInstall, this);
        };
        /** 移除事件 */
        GameScene.prototype.removeEvent = function () {
            // console.info("removeEvent");
            this.removeEventListener(gConst.eventType.CLICK_SELECTION, this.onSelect, this);
        };
        /** 窗口大小改变时调用 */
        GameScene.prototype.resizeView = function () {
            // console.info("resizeView", this.width, this.height, GameMgr.screenType, GameMgr.mobileType);
            this.dispatchEventWith(gConst.eventType.RESIZE_VIEW);
            var baseScale = gConst.mobileByScale[GameMgr.screenType][GameMgr.mobileType];
            var bg = this.bg;
            bg.scaleX = bg.scaleY = Math.max(this.width / bg.width, this.height / bg.height);
            if (GameMgr.screenType == 1 /* VERTICAL */) {
                //竖屏
                // this.pic_con.scaleX = this.pic_con.scaleY = this.con.scaleX = this.con.scaleY = 1
                this.out_con.verticalCenter = NaN;
                this.pic_con.left = this.con.right = NaN;
                this.out_con.y = 0.25 * this.height;
                this.out_con.width = 750;
                this.out_con.height = 1091;
                this.pic_con.top = this.con.bottom = this.pic_con.horizontalCenter = this.con.horizontalCenter = 0;
                switch (GameMgr.mobileType) {
                    //iPhoneX或以上
                    case 1 /* IPHONE_X */:
                        break;
                    //iPhone8或以下
                    case 2 /* IPHONE_8 */:
                        break;
                    //iPad或其它
                    case 3 /* IPAD */:
                        break;
                }
                // this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height * 0.7 / this.out_con.height)
                this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height * 0.7 / this.out_con.height);
            }
            else {
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
                this.con.horizontalCenter = this.pic_con.horizontalCenter = NaN;
                this.out_con.width = this.pic_con.width + this.con.width + 100;
                this.out_con.height = this.con.height;
                this.out_con.y = 0;
                this.out_con.verticalCenter = 0;
                this.pic_con.left = 0;
                this.pic_con.top = NaN;
                this.pic_con.bottom = 60;
                this.con.right = 0;
                this.con.bottom = 0;
                switch (GameMgr.mobileType) {
                    //iPhoneX或以上
                    case 1 /* IPHONE_X */:
                        break;
                    //iPhone8或以下
                    case 2 /* IPHONE_8 */:
                        break;
                    //iPad或其它
                    case 3 /* IPAD */:
                        break;
                }
                // this.pic_con.scaleX = this.pic_con.scaleY = this.con.scaleX = this.con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height * 0.7 / this.out_con.height)
                this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width * 0.8 / this.out_con.width, 1);
            }
        };
        /** 屏幕横竖屏转换时调用 */
        GameScene.prototype.rotateView = function () {
            // console.info("GameScene.rotateView", GameMgr.screenType);
            this.dispatchEventWith(gConst.eventType.ROTATE_VIEW);
            if (GameMgr.screenType == 1 /* VERTICAL */) {
            }
            else {
            }
        };
        GameScene.prototype.enter = function () {
            var _this = this;
            gTween.toLeftShow(this.words_con, 1000, void 0, void 0, void 0, egret.Ease.backOut);
            gTween.toLeftShow(this.input_con, 800, void 0, void 0, void 0, egret.Ease.backOut);
            gTween.toRightShow(this.pic_con, 1000, void 0, void 0, void 0, egret.Ease.backOut, void 0, {
                callback: function () {
                    gTween.toScaleX(_this.line, 1, 500, 0, egret.Ease.quadOut, void 0, {
                        callback: function () {
                            _this.openStart();
                        }
                    });
                }
            });
        };
        GameScene.prototype.openStart = function () {
            this.UiStart = gUiMgr.create(ui.UiStart);
            this.UiStart.open();
        };
        GameScene.prototype.initCom = function () {
            var _this = this;
            this.words_con.$children.forEach(function (child, index) {
                _this['selection_' + index].open(index);
            });
            this.input_con.$children.forEach(function (child, index) {
                _this['input' + index].open();
            });
        };
        GameScene.prototype.loadLevel = function (level) {
            this.currentLevel = gConst.levels[this.currentLevelIndex];
            this.currentInputIndex = 0;
            this.loadPic(this.currentLevel.pic);
            this.loadSelections(this.currentLevel.selections);
            this.clearInput();
        };
        GameScene.prototype.loadBones = function () {
            this.picBone = new com.ComBones();
            this.picBone.setData(this.pic_con, 'pic');
        };
        GameScene.prototype.loadPic = function (picName) {
            var _this = this;
            if (this.currentLevelIndex == 0) {
                this.picBone.play(picName, 0);
            }
            else {
                gTween.fadeOut(this.pic_con, 300, 1, void 0, void 0, {
                    callback: function () {
                        gTween.fadeIn(_this.pic_con, 300, 1);
                        _this.picBone.play(picName, 0);
                    }
                });
            }
        };
        GameScene.prototype.loadSelections = function (selections) {
            var _this = this;
            var s = selections.split(' ');
            s.sort(function (a, b) { return Math.random() - 0.5; });
            this.wordsArray = s;
            s.forEach(function (word, index) {
                _this['selection_' + index].displayWord = word;
                _this['selection_' + index].updateWord();
            });
        };
        GameScene.prototype.clearInput = function () {
            for (var i = 0; i < this.input_con.$children.length; i++) {
                this['input' + i].word.text = '';
            }
        };
        GameScene.prototype.onSelect = function (event) {
            if (!this.canSelect || !this.started)
                return;
            gSoundMgr.playEff('click');
            var data = event.data;
            // 选中
            if (data.selected) {
                // 未满四字
                if (this.currentInputIndex < this.input_con.$children.length) {
                    this['input' + this.currentInputIndex].write(data.word);
                    this.selectedWord.push({ word: data.word, selectionIndex: data.selectionIndex });
                    this.currentInputIndex++;
                    this.showGuide();
                }
                // 已满四字
                if (this.currentInputIndex >= this.input_con.$children.length) {
                    this.canSelect = false;
                    var answer = this.selectedWord.map(function (w) { return w.word; }).join('');
                    if (answer === this.currentLevel.key) {
                        this.rightAnswer();
                    }
                    else {
                        this.wrongAnswer();
                    }
                }
            }
            else {
                // 取消选中
                this.clearSelect(data.word);
            }
        };
        GameScene.prototype.clearSelect = function (selectedWord) {
            var _this = this;
            // 取消选中
            var canClear = false;
            var beginIndex;
            this.selectedWord.forEach(function (word, index) {
                if (selectedWord === word.word) {
                    canClear = true;
                    beginIndex = index;
                }
                if (canClear) {
                    _this['input' + index].clear();
                    _this['selection_' + word.selectionIndex].cancelSelect();
                }
            });
            this.selectedWord.splice(beginIndex);
            this.currentInputIndex = this.selectedWord.length;
            this.showGuide();
        };
        GameScene.prototype.wrongAnswer = function () {
            var _this = this;
            gSoundMgr.playEff('fail');
            var shakeTime = 300;
            this.selectedWord.forEach(function (child, index) {
                _this['input' + index].word.textColor = gConst.gameConfig.wrongColor;
            });
            var st = new util.ShakeTool();
            st.shakeObj(this.input_con, shakeTime, 10, 20, 0);
            egret.setTimeout(function () {
                _this.selectedWord.forEach(function (word, index) {
                    _this['input' + index].clear();
                    _this['selection_' + word.selectionIndex].cancelSelect();
                });
                _this.currentInputIndex = 0;
                _this.selectedWord = [];
                _this.showGuide();
            }, this, shakeTime);
        };
        GameScene.prototype.rightAnswer = function () {
            var _this = this;
            gSoundMgr.playEff('right');
            this.hideGuide();
            this.input_con.$children.forEach(function (child, index) {
                _this['input' + index].correct();
            });
            this.currentInputIndex = 0;
            this.selectedWord = [];
            this.openPass();
        };
        GameScene.prototype.openPass = function () {
            this.UiPass = gUiMgr.create(ui.UiPass);
            this.UiPass.open(this.currentLevel.explain);
        };
        GameScene.prototype.nextLevel = function () {
            var _this = this;
            this.input_con.$children.forEach(function (child, index) {
                _this['input' + index].clear();
            });
            this.currentLevelIndex++;
            if (this.currentLevelIndex >= gConst.levels.length) {
                this.openEnd();
            }
            else {
                this.loadLevel(this.currentLevelIndex);
                this.showGuide();
            }
        };
        /** 显示引导 */
        GameScene.prototype.showGuide = function () {
            if (this.guide) {
                this.guide.over();
            }
            if (!this.guide) {
                this.guide = new com.ComGuide();
            }
            var key = this.currentLevel.key;
            var guideTarget;
            for (var i = 0; i <= this.selectedWord.length; i++) {
                if (!this.selectedWord[i]) {
                    guideTarget = this['selection_' + this.wordsArray.indexOf(key[i])];
                    break;
                }
                if (this.selectedWord[i].word !== key[i]) {
                    guideTarget = this['input' + i];
                    break;
                }
            }
            this.guide.open();
            this.guide.setData(3000, { target1: guideTarget }, this.out_con, {
                pressT: 500,
                liftT: 500
            });
            this.guide.play();
        };
        /** 隐藏引导 */
        GameScene.prototype.hideGuide = function () {
            if (!this.guide) {
                return;
            }
            this.guide.over();
        };
        /** 打开结束界面 */
        GameScene.prototype.openEnd = function (isShowEnd) {
            var _this = this;
            if (isShowEnd === void 0) { isShowEnd = true; }
            // console.info("openEnd");
            // egret.clearTimeout(this.endDelay);
            if (GameMgr.isEnd) {
                return;
            }
            Mapi.gameEnd();
            GameMgr.isEnd = true;
            this.hideGuide();
            this.removeEvent();
            this.closeFirst();
            this.end_con.visible = true;
            gTween.toRightHide(this.out_con, 500, void 0, void 0, void 0, void 0, void 0, {
                callback: function () {
                    _this.end_logo.rotation = 20;
                    gTween.toBottomShow(_this.end_logo, 500, 0.5 * _this.height, void 0, void 0, egret.Ease.bounceOut, { duration: 50 }, {
                        callback: function () {
                            egret.Tween.get(_this.end_logo).to({
                                rotation: 0
                            }, 300);
                            egret.setTimeout(function () {
                                gTween.swing(_this.end_logo, 5, 300);
                            }, _this, 1000);
                        }
                    });
                    gTween.toBigShow(_this.end_title);
                    gTween.toBigShow(_this.end_btn, 300, 1, 1, egret.Ease.bounceOut, { duration: 500 }, {
                        callback: function () {
                            gTween.loopScale(_this.end_btn, 1.2);
                        }
                    });
                }
            });
        };
        return GameScene;
    }(scene.GameBase));
    scene.GameScene = GameScene;
    __reflect(GameScene.prototype, "scene.GameScene");
})(scene || (scene = {}));
//# sourceMappingURL=GameScene.js.map