var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ui;
(function (ui) {
    /**
     * 过关画面
     */
    var UiPass = (function (_super) {
        __extends(UiPass, _super);
        function UiPass() {
            var _this = _super.call(this) || this;
            _this.skinName = skins.UiPass;
            return _this;
        }
        /* =========== 框架结构代码-start =========== */
        /**
         * 初始化
         * @param {any[]} args open()传参会通过init()传过去
         */
        UiPass.prototype.init = function (explainText) {
            // console.info("init", ...args);
            this.explainText = explainText;
        };
        /** 首次打开界面时调用 */
        UiPass.prototype.load = function () {
            // console.info("load");
        };
        /** 每次打开界面都会调用 */
        UiPass.prototype.start = function () {
            // console.info("start");
            this.enter();
        };
        /** 每次结束界面都会调用 */
        UiPass.prototype.stop = function () {
            // console.info("stop");
        };
        /** 监听界面，每帧都会调用 */
        UiPass.prototype.update = function () {
            // console.info("update");
        };
        /** 注册事件 */
        UiPass.prototype.addEvent = function () {
            // console.info("addEvent");
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextLevel, this);
        };
        /** 移除事件 */
        UiPass.prototype.removeEvent = function () {
            // console.info("removeEvent");
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextLevel, this);
        };
        /** 窗口大小改变时调用 */
        UiPass.prototype.resizeView = function () {
            // console.info("resizeView", this.width, this.height);
            // this.out_con.scaleX = this.out_con.scaleY = Math.min(this.width / this.out_con.width, 1, this.height / this.out_con.height)
            if (this.screenType == 1 /* VERTICAL */) {
                //竖屏
                switch (this.mobileType) {
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
            }
            else {
                //横屏
                switch (this.mobileType) {
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
            }
        };
        /** 屏幕横竖屏转换时调用 */
        UiPass.prototype.rotateView = function () {
            // console.info("rotateView", this.screenType);
            if (this.screenType == 1 /* VERTICAL */) {
            }
            else {
            }
        };
        /* =========== 框架结构代码-end =========== */
        /* =========== 业务代码-start =========== */
        UiPass.prototype.enter = function () {
            var _this = this;
            this.visible = true;
            this.explain.text = '';
            var bone = new com.ComBones();
            bone.setData(this.moon_con, 'moon');
            bone.setPos({ x: 0.5 * this.moon_con.width, y: 0.5 * this.moon_con.height });
            bone.play('newAnimation');
            gTween.fadeIn(this.bg, 300, void 0, void 0, void 0, {
                callback: function () {
                    gTween.toBigShow(_this.congrats, 300, 1, 1, egret.Ease.bounceOut);
                    var i = 0;
                    var timer = egret.setInterval(function () {
                        if (i < _this.explainText.length) {
                            _this.explain.text = _this.explain.text + _this.explainText[i];
                            i++;
                        }
                        else {
                            egret.clearInterval(timer);
                        }
                    }, _this, 50);
                    gTween.loopAlpha(_this.btn, 0, 600, 1);
                }
            });
        };
        UiPass.prototype.nextLevel = function () {
            var _this = this;
            gTween.fadeOut(this, 500, 1, void 0, void 0, {
                callback: function () {
                    console.log('close');
                    _this.close();
                    _this.congrats.visible = false;
                    GameMgr.gameScene.nextLevel();
                }
            });
        };
        return UiPass;
    }(ui.UiFile));
    ui.UiPass = UiPass;
    __reflect(UiPass.prototype, "ui.UiPass");
})(ui || (ui = {}));
//# sourceMappingURL=UiPass.js.map