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
     * UI文件（空，可作模板用）
     */
    var UiStart = (function (_super) {
        __extends(UiStart, _super);
        function UiStart() {
            var _this = _super.call(this) || this;
            _this.skinName = skins.UiStart;
            return _this;
        }
        /* =========== 框架结构代码-start =========== */
        /**
         * 初始化
         * @param {any[]} args open()传参会通过init()传过去
         */
        UiStart.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // console.info("init", ...args);
        };
        /** 首次打开界面时调用 */
        UiStart.prototype.load = function () {
            // console.info("load");
        };
        /** 每次打开界面都会调用 */
        UiStart.prototype.start = function () {
            // console.info("start");
            this.enter();
        };
        /** 每次结束界面都会调用 */
        UiStart.prototype.stop = function () {
            // console.info("stop");
        };
        /** 监听界面，每帧都会调用 */
        UiStart.prototype.update = function () {
            // console.info("update");
        };
        /** 注册事件 */
        UiStart.prototype.addEvent = function () {
            // console.info("addEvent");
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        };
        /** 移除事件 */
        UiStart.prototype.removeEvent = function () {
            // console.info("removeEvent");
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        };
        /** 窗口大小改变时调用 */
        UiStart.prototype.resizeView = function () {
            // console.info("resizeView", this.width, this.height);
            this.chat.x = 0.5 * this.width;
            this.chat.y = 0.5 * this.height;
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
        UiStart.prototype.rotateView = function () {
            // console.info("rotateView", this.screenType);
            if (this.screenType == 1 /* VERTICAL */) {
            }
            else {
            }
        };
        /* =========== 框架结构代码-end =========== */
        /* =========== 业务代码-start =========== */
        UiStart.prototype.enter = function () {
            var _this = this;
            GameMgr.gameScene.setChildIndex(this, -1);
            gTween.fadeIn(this.bg);
            gTween.toTopShow(this.chat, 800, 0.5 * this.height, 0.5 * this.height, 1, egret.Ease.bounceOut, void 0, {
                callback: function () {
                    gTween.loopAlpha(_this.btn, 0, 500, 1);
                }
            });
        };
        UiStart.prototype.onClose = function () {
            var _this = this;
            this.removeEvent();
            gTween.fadeOut(this, 500, 1, void 0, void 0, {
                callback: function () {
                    if (_this.parent) {
                        GameMgr.gameScene.showGuide();
                        _this.close();
                        GameMgr.gameScene.canSelect = true;
                        GameMgr.gameScene.started = true;
                    }
                }
            });
        };
        return UiStart;
    }(ui.UiFile));
    ui.UiStart = UiStart;
    __reflect(UiStart.prototype, "ui.UiStart");
})(ui || (ui = {}));
//# sourceMappingURL=UiStart.js.map