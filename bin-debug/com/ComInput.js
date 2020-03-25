var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var com;
(function (com) {
    /**
     * 单个输入框
     */
    var ComInput = (function (_super) {
        __extends(ComInput, _super);
        function ComInput() {
            var _this = _super.call(this) || this;
            _this.skinName = skins.ComInput;
            return _this;
        }
        /* =========== 框架结构代码-start =========== */
        /**
         * 初始化
         * @param {any[]} args 构建传参会通过init()传过去
         */
        ComInput.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // console.info("init", ...args);
        };
        /** 首次创建组件时调用 */
        ComInput.prototype.load = function () {
            // console.info("load");
            this.skinName = skins.ComInput;
        };
        /** 每次创建组件都会调用 */
        ComInput.prototype.start = function () {
            // console.info("start");
            this.word.text = '';
        };
        /** 每次结束组件都会调用 */
        ComInput.prototype.stop = function () {
            // console.info("stop");
        };
        /** 监听组件，每帧都会调用 */
        ComInput.prototype.update = function () {
            // console.info("update");
        };
        /** 注册事件 */
        ComInput.prototype.addEvent = function () {
            // console.info("addEvent");
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClear, this);
        };
        /** 移除事件 */
        ComInput.prototype.removeEvent = function () {
            // console.info("removeEvent");
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickClear, this);
        };
        /** 窗口大小改变时调用 */
        ComInput.prototype.resizeView = function (event) {
            // console.info("resizeView", event, GameMgr.gameview.width, GameMgr.gameview.height);
            if (GameMgr.screenType == 1 /* VERTICAL */) {
                //竖屏
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
            }
            else {
                //横屏
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
            }
        };
        /** 屏幕横竖屏转换时调用 */
        ComInput.prototype.rotateView = function (event) {
            // console.info("rotateView", event, GameMgr.screenType, GameMgr.mobileType);
            if (GameMgr.screenType == 1 /* VERTICAL */) {
            }
            else {
            }
        };
        /* =========== 框架结构代码-end =========== */
        /* =========== 业务代码-start =========== */
        ComInput.prototype.write = function (word) {
            this.word.text = word;
            this.word.textColor = gConst.gameConfig.inputColor;
            gTween.toBigShow(this.word, 300, 1, 1, egret.Ease.bounceOut);
        };
        ComInput.prototype.clear = function () {
            var _this = this;
            gTween.toSmallHide(this.word, 300, 1, 1, egret.Ease.bounceOut, void 0, {
                callback: function () {
                    _this.word.text = '';
                    _this.word.textColor = gConst.gameConfig.inputColor;
                }
            });
        };
        ComInput.prototype.clickClear = function () {
            if (!GameMgr.gameScene.started || !GameMgr.gameScene.canSelect)
                return;
            GameMgr.gameScene.clearSelect(this.word.text);
        };
        ComInput.prototype.correct = function () {
            this.word.textColor = gConst.gameConfig.rightColor;
        };
        return ComInput;
    }(com.ComFile));
    com.ComInput = ComInput;
    __reflect(ComInput.prototype, "com.ComInput");
})(com || (com = {}));
//# sourceMappingURL=ComInput.js.map