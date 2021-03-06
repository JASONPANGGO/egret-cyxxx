namespace util {
    /**
     * 场景切换特效工具
     * by 王飞
     * (c) copyright 2018 - 2035
     * All Rights Reserved. 
     */

    export class ScreenMovies {

        public constructor() {

        }

        /**
         * 开始切换场景的特效
         * @example gScreenMovies.start(5);
         * @param {number} type 特效类型 1.卷帘特效 2.左右切换移动 3.直接翻 4.旋转掉落 5.随机一种
         */
        public start(type: number) {
            //当前舞台
            var taget: egret.Stage = GameMgr.stage;
            var w: number = GameMgr.stage.stageWidth;
            var h: number = GameMgr.stage.stageHeight;
            //新建一个group
            var loadTxGrp: eui.Group = new eui.Group();
            loadTxGrp.width = w;
            loadTxGrp.height = h;
            taget.addChild(loadTxGrp)
            //循环创建多个截图bitmap 这里num自由设置
            var tx1Number = 40;
            //每个横着的数量
            var Xnumber = 5;
            //高数量自动计算
            var Ynumber = tx1Number / Xnumber;
            for (let i: number = 0; i < tx1Number; i++) {
                //计算每个的XY及宽高
                var _mcW: number = w / Xnumber;
                var _mcH: number = h / Ynumber;
                var _mcX: number = i % Xnumber * _mcW;
                var _mcY: number = Math.floor(i / Xnumber) * _mcH;

                var renderTexture: egret.RenderTexture = new egret.RenderTexture();
                var mypic: boolean = renderTexture.drawToTexture(taget, new egret.Rectangle(_mcX, _mcY, _mcW, _mcH));
                //创建一个截图Bitmap
                var bmp: egret.Bitmap = new egret.Bitmap;
                bmp.texture = renderTexture;
                bmp.anchorOffsetX = _mcW / 2;
                bmp.anchorOffsetY = _mcH / 2;
                bmp.x = _mcX + _mcW / 2;
                bmp.y = _mcY + _mcH / 2;
                loadTxGrp.addChild(bmp);
                if (type == 5) {
                    type = Math.ceil(Math.random() * 4);
                }
                //开始特效
                switch (type) {
                    case 1:
                        gTween.tween(bmp, void 0, {
                            props: { scaleX: 0, scaleY: 0, alpha: 0, rotation: 359 },
                            duration: 800,
                            ease: egret.Ease.circIn,
                            call: {
                                callback: onComplete,
                                thisObj: this
                            }
                        });
                        break;
                    case 2:
                        var my_x: number = -w;
                        if (!(i % 2)) {
                            my_x = w * 2;
                        }

                        gTween.tween(bmp, void 0, {
                            props: { x: my_x, alpha: 0 },
                            duration: 800,
                            ease: egret.Ease.circIn,
                            call: {
                                callback: onComplete,
                                thisObj: this
                            }
                        });
                        break;
                    case 3:
                        gTween.tween(bmp, void 0, {
                            props: { scaleX: 0.2, scaleY: 1, alpha: 0, blurFliter: 0 },
                            duration: 800,
                            ease: egret.Ease.backInOut,
                            call: {
                                callback: onComplete,
                                thisObj: this
                            }
                        });
                        break;
                    case 4:
                        gTween.tween(bmp, void 0, {
                            props: { alpha: 0 },
                            duration: 900,
                            ease: egret.Ease.circIn,
                            call: {
                                callback: onComplete,
                                thisObj: this
                            }
                        });
                        break;
                    default:
                        gTween.tween(bmp, void 0, {
                            props: { scaleX: 1, scaleY: 0, alpha: 0 },
                            duration: 800,
                            ease: egret.Ease.circIn,
                            call: {
                                callback: onComplete,
                                thisObj: this
                            }
                        });
                        break;
                }
            }

            let upNumber: number = 0;
            function onComplete(event: Comment) {
                upNumber++;
                if (upNumber == tx1Number) {
                    taget.removeChild(loadTxGrp);
                }
            }
        }
    }
}