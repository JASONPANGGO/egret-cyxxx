/**
 * 常量配置表 (框架层)
 * @file {G_Const.ts}
 * @description 框架层常量配置放这里，一般改动不大，只做拓展多。
 * @description {config.js} 业务层常量配置放 config.js，方便：经常改动、开发时调整配置 (打包时直接替换文件即可)。
 */
var gConst;
(function (gConst) {
    /** 指派事件类型 */
    gConst.eventType = {
        /** 流程事件 */
        GAME_READY: "gameReady",
        GAME_START: "gameStart",
        GAME_RETRY: "gameRetry",
        GAME_END: "gameEnd",
        GAME_CLOSE: "gameClose",
        INSTALL: "install",
        /** 通用事件 */
        RESIZE_VIEW: "resizeView",
        ROTATE_VIEW: "rotateView",
        GUIDE_TOUCH_ONE: "guideTouchOne",
        GUIDE_STOP: "guideStop",
        IN_COMPLETE: "inComplete",
        IN_LOOP_COMPLETE: "inLoopComplete",
        OUT_COMPLETE: "outComplete",
        OUT_LOOP_COMPLETE: "outLoopComplete",
        CHOOSE_COMPLETE: "chooseComplete",
        CHOOSE_LOOP_COMPLETE: "chooseLoopComplete",
        ONE_STEP_COMPLETE: "oneStepComplete",
        ONE_STEP_FAIL: "oneStepFail",
        ONCE_COMPLETE: "onceComplete",
        ONCE_FAIL: "onceFail",
        ALL_COMPLETE: "allComplete",
        ALL_FAIL: "allFail",
        USE_UP: "useUp",
        TOUCH_TAP: "touchTap",
        TOUCH_BEGIN: "touchBegin",
        TOUCH_MOVE: "touchMove",
        TOUCH_END: "touchEnd",
        RIGHT_ANSWER: "rightAnswer",
        SHOW_GUIDE: "showGuide",
        HIDE_GUIDE: "hideGuide",
        /** UI事件 */
        OPEN_TRAN: "openTran",
        CLOSE_TRAN: "closeTran",
        OPEN_END: "openEnd",
        CLOSE_END: "closeEnd",
        OPEN_PEOPLE: "openPeople",
        CLOSE_PEOPLE: "closePeople",
        /** 游戏场景事件 */
        SHOW_BLACK: "showBlack",
        HIDE_BLACK: "hideBlack",
        SHOW_SCENE0: "showScene0",
        HIDE_SCENE0: "hideScene0",
        SHOW_SCENE1: "showScene1",
        HIDE_SCENE1: "hideScene1",
        SHOW_SCENE2: "showScene2",
        HIDE_SCENE2: "hideScene2",
        /** 对象事件 */
        CLOSE: "close",
        REMOVE_OBJ: "removeObj",
        CLICK_OBJ: "clickObj",
        /** 业务事件 */
        CLICK_SELECTION: 'clickSelection',
        CLICK_INPUT: 'clickInput'
    };
    /** 方位 */
    gConst.direction = {
        CENTER_CENTER: "centerCenter",
        LEFT_TOP: "leftTop",
        CENTER_TOP: "centerTop",
        RIGHT_TOP: "rightTop",
        RIGHT_CENTER: "rightCenter",
        RIGHT_BOTTOM: "rightBottom",
        CENTER_BOTTOM: "centerBottom",
        LEFT_BOTTOM: "leftBottom",
        LEFT_CENTER: "leftCenter",
    };
    /** 设备类型对应整体缩放倍数 */
    gConst.mobileByScale = (_a = {},
        //竖屏
        _a[1 /* VERTICAL */] = (_b = {},
            _b[1 /* IPHONE_X */] = 1,
            _b[2 /* IPHONE_8 */] = 1,
            _b[3 /* IPAD */] = 0.8,
            _b),
        //横屏
        _a[0 /* HORIZONTAL */] = (_c = {},
            _c[1 /* IPHONE_X */] = 1,
            _c[2 /* IPHONE_8 */] = 1,
            _c[3 /* IPAD */] = 0.8,
            _c),
        _a);
    /** 单元格皮肤 */
    gConst.cellSkin = (_d = {},
        _d[1 /* RED */] = "Red",
        _d[2 /* YELLOW */] = "Yellow",
        _d[3 /* GREEN */] = "Green",
        _d[4 /* BLUE */] = "Blue",
        _d);
    /** 单元格名称 */
    gConst.cellName = (_e = {},
        _e[1 /* RED */] = "red",
        _e[2 /* YELLOW */] = "yellow",
        _e[3 /* GREEN */] = "green",
        _e[4 /* BLUE */] = "blue",
        _e);
    /** 单元格颜色 */
    gConst.cellColor = (_f = {},
        _f[1 /* RED */] = 0xFF505C,
        _f[2 /* YELLOW */] = 0xFFCE64,
        _f[3 /* GREEN */] = 0x63CE81,
        _f[4 /* BLUE */] = 0x6E8CBD,
        _f);
    gConst.levels = [
        {
            level: 1,
            key: '锦上添花',
            selections: '锦 上 添 花 尽 琳 团 相 簇 难 前 立 金 营 理 阵 用 为 止 地',
            pic: 'pic1',
            explain: '锦上添花：意指在美丽的锦织物上再添加鲜花。比喻略加修饰使美者更美，引申比喻在原有成就的基础上进一步完善。'
        },
        {
            level: 2,
            key: '火冒三丈',
            selections: '火 冒 三 丈 不 攻 金 眼 风 强 天 转 星 目 待 画 词 遏 瞬 心',
            pic: 'pic2',
            explain: '火冒三丈：指火势大，也形容愤怒到极点，怒气特别大。'
        },
        {
            level: 3,
            key: '不拘小节',
            selections: '不 拘 小 节 问 尽 待 必 千 石 双 投 道 二 比 始 仪 路 藏 白',
            pic: 'pic3',
            explain: '不拘小节：意思是指不为无关原则的琐事所约束。'
        },
        {
            level: 4,
            key: '表里山河',
            selections: '表 里 山 河 柳 尘 遁 看 异 门 红 来 朝 田 入 破 众 空 时 皆',
            pic: 'pic4',
            explain: '表里山河：指有山河天险作为屏障。'
        },
        {
            level: 5,
            key: '匠心独运',
            selections: '匠 心 独 运 盗 而 不 行 傲 祸 视 无 乐 小 见 举 旗 世 双 单',
            pic: 'pic5',
            explain: '匠心独运：意思是独具创新地运用精巧的心思，形容文学艺术等方面构思巧妙。'
        }
    ];
    gConst.gameConfig = {
        maxInputIndex: 4,
        selectionColor: 0x90170e,
        inputColor: 0xdc862c,
        rightColor: 0x91a444,
        wrongColor: 0xd92d35
    };
    var _a, _b, _c, _d, _e, _f;
})(gConst || (gConst = {}));
//# sourceMappingURL=G_Const.js.map