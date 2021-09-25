module.exports = {
    /** 
     * 默认设置(公用)
     */
    default_config: {
        /**
         * 监视更转的用户uid
         */
        UIDs: [
            31252386,
            689277291,
            241675899
        ],

        /**
         * 监视的专栏关键词
         */
        Articles: [
            '抽奖合集'
        ],

        /**
         * 监视的tag
         */
        TAGs: [
            '互动抽奖',
            '转发抽奖',
            '动态抽奖',
            '抽奖',
        ],

        /**
         * 动态中的关键词(表示须同时满足以下条件)
         * 符合js正则表达式的字符串
         */
        key_words: [
            "[抽奖]",
            "[转关].*[转关]"
        ],

        /**
         * - '00' 关闭自动抽奖
         * - '10' 只转发官方抽奖
         * - '01' 只转发非官方抽奖
         * - '11' 都转
         */
        model: '11',

        /**
         * - '00'关闭自动评论
         * - '10'只评论官抽
         * - '01'只评论非官抽
         * - '11'都评论
         */
        chatmodel: '11',

        /**
         * 不加判断的转发所监视的uid转发的动态
         */
        is_imitator: false,

        /**
         * - 在uid里检索的页数
         */
        uid_scan_page: 3,

        /**
         * - 在tag里检索的页数
         */
        tag_scan_page: 3,

        /**
         * - 获取专栏数量
         */
        article_scan_page: 3,
        
        /**
         * - 不检查专栏是否看过，若选择检查可以提高检测效率
         * - 默认false(检查)
         */
        not_check_article: false,

        /**
         * - 开奖时间距离现在的最大天数
         * - 默认不限制
         */
        maxday: Infinity,

        /**
         *  - 循环等待时间(指所有操作完毕后的休眠时间)
         *  - 单位毫秒
         */
        lottery_loop_wait: 10 * 60 * 60 * 1000,
        check_loop_wait: 20 * 60 * 60 * 1000,
        clear_loop_wait: 0,
        update_loop_wait: 72 * 60 * 60 * 1000,

        /**
         * - 转发间隔时间
         * - 单位毫秒
         * - 上下浮动50%
         */
        wait: 40 * 1000,

        /**
         * - 检索动态间隔
         * - 单位毫秒
         */
        search_wait: 1000,

        /**
         * - up主粉丝数限制
         */
        minfollower: 10000,

        /**
         * - 只转发已关注的
         */
        only_followed: true,

        /**
         * - 是否发送随机动态(防止被开奖机过滤)
         */
        create_dy: false,

        /**
         * - 发送随机动态的数量
         */
        create_dy_num: 1,

        /**
         * - 随机动态内容
         * - 类型 `content[]`
         */
        /**
         * @typedef Picture
         * @property {string} img_src 站内源
         * @property {number} img_width
         * @property {number} img_height
         * @param { string | Picture[] } content
         */
        dy_contents: ['[doge]', '[doge][doge]'],

        /**
         * 转发时[at]的用户
         */
        at_users: [['转发抽奖娘', 294887687], ['你的工具人老公', 100680137]],

        /**
         * - 自动同步 https://gitee.com/shanmite/lottery-notice/raw/master/notice.json
         * - 英文逗号分隔 如: 1,2,3
         */
        blacklist: '',

        /**
         * 屏蔽词
         */
        blockword: ["脚本抽奖", "恭喜", "结果", "抽奖号", "钓鱼", "涨粉","脚本","送我"],

        /**
         * 转发评语
         */
        relay: ['[doge]','[doge][doge]','[OK]','[星星眼]', '[歪嘴]来了','冲不动了[吃瓜]','[吃瓜]','凑热闹','分子分母之争','下次一定','打卡','我的我的','[打call]','不多说了，凑个数','来了来了','分母！','还有人冲吗','来了来了','天选之人','贴贴[doge]','[吃瓜]','23333','666','你说是谁就是谁[doge]','人可真多','能中就是奇迹','2333','万中无一','[OK]','[星星眼]','[歪嘴]','[喜欢]','[偷笑]','[笑]','[喜极而泣]','[辣眼睛]','[吃瓜]','[奋斗]','永不缺席 永不中奖 永不放弃！','万一呢','在','冲吖~','来了','万一','[保佑][保佑]','从未中，从未停','[吃瓜]','[抠鼻][抠鼻]','来了','秋梨膏','[呲牙]','从不缺席','分子','可以','不会吧','好','rush','来来来','ok','冲','凑热闹','我要我要[打call]','我还能中！让我中！！！','大家都散了吧，已经抽完了，是我的','我是天选之子','给我中一次吧！','[OK][OK]','我来抽个奖','中中中中中中','[doge][doge][doge]','我我我'],

        /**
         * 评论内容
         */
        chat: [
            '[doge]','[doge][doge]','[OK]','[星星眼]', '[歪嘴]来了','冲不动了[吃瓜]','[吃瓜]','凑热闹','分子分母之争','下次一定','打卡','我的我的','[打call]','不多说了，凑个数','来了来了','分母！','还有人冲吗','来了来了','天选之人','贴贴[doge]','[吃瓜]','23333','666','你说是谁就是谁[doge]','人可真多','能中就是奇迹','2333','万中无一','[OK]','[星星眼]','[歪嘴]','[喜欢]','[偷笑]','[笑]','[喜极而泣]','[辣眼睛]','[吃瓜]','[奋斗]','永不缺席 永不中奖 永不放弃！','万一呢','在','冲吖~','来了','万一','[保佑][保佑]','从未中，从未停','[吃瓜]','[抠鼻][抠鼻]','来了','秋梨膏','[呲牙]','从不缺席','分子','可以','不会吧','好','rush','来来来','ok','冲','凑热闹','我要我要[打call]','我还能中！让我中！！！','大家都散了吧，已经抽完了，是我的','我是天选之子','给我中一次吧！','[OK][OK]','我来抽个奖','中中中中中中','[doge][doge][doge]','我我我'
         ],

        /**
         * - 抽奖UP用户分组id(网页端点击分区后地址栏中的tagid)
         * - 自动获取
         */
        partition_id: 0,

        /**
         * 是否关注异常
         */
        is_exception: false,

        /**
         * - 中奖通知关键词(满足一个就推送)
         * - 符合js正则表达式的字符串
         * - 若以 ~ 开头则表示为黑名单规则
         */
        notice_key_words: [
            "中奖|获得|填写|写上|提供|收货地址|支付宝账号|码|大会员",
            "~有奖预约通知"
        ],

        /**
         * - 清理白名单uid或dyid
         * - 英文逗号分隔 如: 1,2,3
         */
        clear_white_list: '',

        /**
         * - 取关分区
         * - 默认为: 此处存放因抽奖临时关注的up
         */
        clear_partition: '',

        /**
         * 清理多少天之前的动态或关注
         */
        clear_max_day: 30,

        /**
         * - 快速移除关注
         * - 不加判断只去除关注
         */
        clear_quick_remove_attention: false,

        /**
         * 是否移除动态
         */
        clear_remove_dynamic: false,

        /**
         * 是否移除关注
         */
        clear_remove_attention: false,

        /**
         * 清除动态延时(毫秒)
         */
        clear_remove_delay: 8000,

        /**
         * 清除动态类型
         * 
         * | 动态类型   | type值 |
         * | :------- |:----- |
         * | 无        | `0`    |
         * | 转发       | `1`    |
         * | 含图片     | `2`    |
         * | 无图纯文字  | `4`    |
         * | 视频       | `8`    |
         * | 活动       | `2048` |
         * | 专栏       | `64`   |
         */
        clear_dynamic_type: 1
    },

    /**
     * 针对某一账号的特别设置
     * config_[数字] 依次类推
     */
    config_1: {},
    config_2: {},
    config_3: {}
}