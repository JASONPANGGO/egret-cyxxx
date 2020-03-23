/**
 * 常量配置表 (框架层)
 * @file {G_Const.ts}
 * @description 框架层常量配置放这里，一般改动不大，只做拓展多。
 * @description {config.js} 业务层常量配置放 config.js，方便：经常改动、开发时调整配置 (打包时直接替换文件即可)。
 */

namespace gConst {
	/** 指派事件类型 */
	export const eventType = {
		/** 流程事件 */
		GAME_READY: "gameReady", //游戏准备开始
		GAME_START: "gameStart", //游戏开始
		GAME_RETRY: "gameRetry", //游戏重玩
		GAME_END: "gameEnd", //游戏结束
		GAME_CLOSE: "gameClose", //游戏关闭
		INSTALL: "install", //游戏安装

		/** 通用事件 */
		RESIZE_VIEW: "resizeView", //窗口大小改变
		ROTATE_VIEW: "rotateView", //屏幕横竖屏转换
		GUIDE_TOUCH_ONE: "guideTouchOne", //每引导按下一次
		GUIDE_STOP: "guideStop", //引导结束
		IN_COMPLETE: "inComplete", //进场完成
		IN_LOOP_COMPLETE: "inLoopComplete", //多个进场循环完成
		OUT_COMPLETE: "outComplete", //出场完成
		OUT_LOOP_COMPLETE: "outLoopComplete", //多个出场循环完成
		CHOOSE_COMPLETE: "chooseComplete", //切换状态完成
		CHOOSE_LOOP_COMPLETE: "chooseLoopComplete", //多个切换状态循环完成
		ONE_STEP_COMPLETE: "oneStepComplete", //单步完成
		ONE_STEP_FAIL: "oneStepFail", //单步失败
		ONCE_COMPLETE: "onceComplete", //单次完成
		ONCE_FAIL: "onceFail", //单次失败
		ALL_COMPLETE: "allComplete", //所有完成
		ALL_FAIL: "allFail", //所有失败
		USE_UP: "useUp", //次、步数消耗完
		TOUCH_TAP: "touchTap", //用于触发点击事件时，另行分发通知
		TOUCH_BEGIN: "touchBegin", //用于触发触摸事件时，另行分发通知
		TOUCH_MOVE: "touchMove", //用于触发触摸滑动事件时，另行分发通知
		TOUCH_END: "touchEnd", //用于触发触摸离开事件时，另行分发通知
		RIGHT_ANSWER: "rightAnswer", //正确答案
		SHOW_GUIDE: "showGuide", //显示引导
		HIDE_GUIDE: "hideGuide", //隐藏引导

		/** UI事件 */
		OPEN_TRAN: "openTran", //打开过场页面
		CLOSE_TRAN: "closeTran", //关闭过场页面
		OPEN_END: "openEnd", //打开结束界面
		CLOSE_END: "closeEnd", //关闭结束界面
		OPEN_PEOPLE: "openPeople", //打开人物页面
		CLOSE_PEOPLE: "closePeople", //关闭人物页面

		/** 游戏场景事件 */
		SHOW_BLACK: "showBlack", //显示黑色层
		HIDE_BLACK: "hideBlack", //隐藏黑色层
		SHOW_SCENE0: "showScene0", //显示子场景0组件
		HIDE_SCENE0: "hideScene0", //隐藏子场景0组件
		SHOW_SCENE1: "showScene1", //显示子场景1组件
		HIDE_SCENE1: "hideScene1", //隐藏子场景1组件
		SHOW_SCENE2: "showScene2", //显示子场景2组件
		HIDE_SCENE2: "hideScene2", //隐藏子场景2组件

		/** 对象事件 */
		CLOSE: "close", //关闭对象
		REMOVE_OBJ: "removeObj", //移除对象
		CLICK_OBJ: "clickObj", //点击对象

		/** 业务事件 */
		CLICK_SELECTION: 'clickSelection',
		CLICK_INPUT: 'clickInput'
	}

	/** 方位 */
	export const direction = {
		CENTER_CENTER: "centerCenter", //中心 ※
		LEFT_TOP: "leftTop",			//左上 ↖
		CENTER_TOP: "centerTop",		//中上 ↑
		RIGHT_TOP: "rightTop",			//右上 ↗
		RIGHT_CENTER: "rightCenter",	//右中 →
		RIGHT_BOTTOM: "rightBottom",	//右下 ↘
		CENTER_BOTTOM: "centerBottom",	//中下 ↓
		LEFT_BOTTOM: "leftBottom",		//左下 ↙
		LEFT_CENTER: "leftCenter",		//左中 ←
	}

	/** 屏幕尺寸 */
	export const enum screen {
		WIDTH = 750, //宽度
		HEIGHT = 1334, //高度
	}

	/** 屏幕类型 */
	export const enum screenType {
		HORIZONTAL = 0, //横屏
		VERTICAL = 1, //竖屏
	}

	/** 设备类型 */
	export const enum mobileType {
		IPHONE_X = 1, //iPhoneX或以上
		IPHONE_8 = 2, //iPhone8或以下
		IPAD = 3, //iPad或其它
	}

	/** 设备类型对应整体缩放倍数 */
	export const mobileByScale = {
		//竖屏
		[gConst.screenType.VERTICAL]: {
			[gConst.mobileType.IPHONE_X]: 1, //iPhoneX或以上
			[gConst.mobileType.IPHONE_8]: 1, //iPhone8或以下
			[gConst.mobileType.IPAD]: 0.8, //iPad或其它
		},
		//横屏
		[gConst.screenType.HORIZONTAL]: {
			[gConst.mobileType.IPHONE_X]: 1, //iPhoneX或以上
			[gConst.mobileType.IPHONE_8]: 1, //iPhone8或以下
			[gConst.mobileType.IPAD]: 0.8, //iPad或其它
		}
	}

	/** 点击动画类型 */
	export const enum clkAimType {
		HIDE = 0, //隐藏
		SCALE = 1, //缩放
	}

	/** 结束页类型 */
	export const enum endType {
		FAIL = 0, //失败
		VICTORY = 1, //胜利
		INIT = 2, //初始化
	}

	/** 单元格ID */
	export const enum cellId {
		RED = 1, //红
		YELLOW = 2, //黄
		GREEN = 3, //绿
		BLUE = 4, //蓝
	}

	/** 单元格皮肤 */
	export const cellSkin = {
		[gConst.cellId.RED]: "Red", //红
		[gConst.cellId.YELLOW]: "Yellow", //黄
		[gConst.cellId.GREEN]: "Green", //绿
		[gConst.cellId.BLUE]: "Blue", //蓝
	}

	/** 单元格名称 */
	export const cellName = {
		[gConst.cellId.RED]: "red", //红
		[gConst.cellId.YELLOW]: "yellow", //黄
		[gConst.cellId.GREEN]: "green", //绿
		[gConst.cellId.BLUE]: "blue", //蓝
	}

	/** 单元格颜色 */
	export const cellColor = {
		[gConst.cellId.RED]: 0xFF505C, //红
		[gConst.cellId.YELLOW]: 0xFFCE64, //黄
		[gConst.cellId.GREEN]: 0x63CE81, //绿
		[gConst.cellId.BLUE]: 0x6E8CBD, //蓝
	}

	/**
	 * 结束按钮动画类型
	 */
	export const enum endBtnAimType {
		SCALE = 1, //大小等比例缩放
		DRAWING = 2, //左右拉伸——上下拉伸
		SWING = 3, //上下摆动
	}


	export const levels = [
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
			explain: '指有山河天险作为屏障。'
		},

		{
			level: 5,
			key: '匠心独运',
			selections: '匠 心 独 运 盗 而 不 行 傲 祸 视 无 乐 小 见 举 旗 世 双 单',
			pic: 'pic5',
			explain: '匠心独运：意思是独具创新地运用精巧的心思，形容文学艺术等方面构思巧妙。'
		}
	]

	export const gameConfig = {
		maxInputIndex: 4,
		selectionColor: 0x90170e,
		inputColor: 0xdc862c,
		rightColor: 0x91a444,
		wrongColor: 0xd92d35
	}
}