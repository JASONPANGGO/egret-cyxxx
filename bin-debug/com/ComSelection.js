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
     * 底部单个选字组件
     */
    var ComSelection = (function (_super) {
        __extends(ComSelection, _super);
        function ComSelection() {
            var _this = _super.call(this) || this;
            _this.selected = false;
            _this.skinName = skins.ComSelection;
            return _this;
        }
        /* =========== 框架结构代码-start =========== */
        /**
         * 初始化
         * @param {any[]} args 构建传参会通过init()传过去
         */
        ComSelection.prototype.init = function (index) {
            // console.info("init", ...args);
            this.selectionIndex = index;
        };
        /** 首次创建组件时调用 */
        ComSelection.prototype.load = function () {
            // console.info("load");
        };
        /** 每次创建组件都会调用 */
        ComSelection.prototype.start = function () {
            // console.info("start");
        };
        /** 每次结束组件都会调用 */
        ComSelection.prototype.stop = function () {
            // console.info("stop");
        };
        /** 监听组件，每帧都会调用 */
        ComSelection.prototype.update = function () {
            // console.info("update");
        };
        /** 注册事件 */
        ComSelection.prototype.addEvent = function () {
            // console.info("addEvent");
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
        };
        /** 移除事件 */
        ComSelection.prototype.removeEvent = function () {
            // console.info("removeEvent");
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
        };
        /** 窗口大小改变时调用 */
        ComSelection.prototype.resizeView = function (event) {
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
        ComSelection.prototype.rotateView = function (event) {
            // console.info("rotateView", event, GameMgr.screenType, GameMgr.mobileType);
            if (GameMgr.screenType == 1 /* VERTICAL */) {
            }
            else {
            }
        };
        /* =========== 框架结构代码-end =========== */
        /* =========== 业务代码-start =========== */
        ComSelection.prototype.onSelect = function (event) {
            // 现在已经选择了
            if (this.selected) {
                this.cancelSelect();
            }
            else {
                // 现在还没被选择
                gTween.fadeIn(this.bg_selected, 300, 1);
                gTween.toScale(this.con, 0.85 / 0.8, 300);
                this.selected = true;
            }
            GameMgr.gameScene.dispatchEventWith(gConst.eventType.CLICK_SELECTION, void 0, {
                selected: this.selected,
                word: this.word.text,
                selectionIndex: this.selectionIndex
            });
        };
        ComSelection.prototype.cancelSelect = function () {
            this.selected = false;
            gTween.fadeOut(this.bg_selected, 300, 1);
            gTween.toScale(this.con, 0.8 / 0.85, 300);
        };
        ComSelection.prototype.updateWord = function () {
            var _this = this;
            gTween.fadeOut(this.bg_selected);
            gTween.toSmallHide(this.word, 500, 1, 1, egret.Ease.backOut, void 0, {
                callback: function () {
                    _this.word.text = _this.displayWord;
                    gTween.toBigShow(_this.word, 500, 1, 1, egret.Ease.bounceOut);
                }
            });
            this.selected = false;
        };
        return ComSelection;
    }(com.ComFile));
    com.ComSelection = ComSelection;
    __reflect(ComSelection.prototype, "com.ComSelection");
})(com || (com = {}));
//# sourceMappingURL=ComSelection.js.map