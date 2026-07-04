/* app.js - 國語複習簡報邏輯控制與資料庫 */

// ==========================================
// 資料庫
// ==========================================
const DATA = {
    // 聽寫選字 (35題)
    dictation: [
        { word: "臺灣",   wrong: "臺彎" },
        { word: "清晨",   wrong: "青晨" },
        { word: "嘗試",   wrong: "常試" },
        { word: "騎單車", wrong: "騎彈車" },
        { word: "環湖",   wrong: "還湖" },
        { word: "倒映",   wrong: "倒印" },
        { word: "遠望",   wrong: "遠忘" },
        { word: "落羽松", wrong: "落雨松" },
        { word: "搭船",   wrong: "搭傳" },
        { word: "鐵扇公主", wrong: "鐵善公主" },
        { word: "菩薩",   wrong: "菩產" },
        { word: "擔心",   wrong: "瞻心" },
        { word: "口訣",   wrong: "口決" },
        { word: "寶貝",   wrong: "保貝" },
        { word: "牛魔王", wrong: "牛磨王" },
        { word: "慌張",   wrong: "荒張" },
        { word: "病情",   wrong: "病青" },
        { word: "瘦弱",   wrong: "搜弱" },
        { word: "賺錢",   wrong: "謙錢" },
        { word: "意志",   wrong: "意智" },
        { word: "破爛",   wrong: "坡爛" },
        { word: "感傷",   wrong: "感商" },
        { word: "鼓舞",   wrong: "古舞" },
        { word: "窮困",   wrong: "窮群" },
        { word: "頂樓",   wrong: "頂婁" },
        { word: "合租",   wrong: "盒租" },
        { word: "橡皮擦", wrong: "像皮擦" },
        { word: "道謝",   wrong: "導謝" },
        { word: "無比",   wrong: "無必" },
        { word: "轉學",   wrong: "專學" },
        { word: "任務",   wrong: "任物" },
        { word: "討論",   wrong: "討倫" },
        { word: "心得",   wrong: "心德" },
        { word: "園遊會", wrong: "圓遊會" },
        { word: "報告",   wrong: "抱告" }
    ],

    // 生字部首造詞 (36個)
    radicals: [
        { char: "似", radical: "人部",  strokes: 9,  words: "似乎、相似、類似" },
        { char: "巧", radical: "工部",  strokes: 5,  words: "巧妙、精巧、巧合" },
        { char: "緩", radical: "糸部",  strokes: 15, words: "緩慢、緩和、緩衝" },
        { char: "規", radical: "見部",  strokes: 11, words: "規則、規定、規劃" },
        { char: "際", radical: "阜部",  strokes: 14, words: "邊際、國際、交際" },
        { char: "棧", radical: "木部",  strokes: 12, words: "客棧、棧道、棧板" },
        { char: "劃", radical: "刀部",  strokes: 14, words: "企劃、劃分、劃清" },
        { char: "透", radical: "辵部",  strokes: 11, words: "透明、透光、透氣" },
        { char: "趟", radical: "走部",  strokes: 15, words: "一趟、趕趟" },
        { char: "菩", radical: "艸部",  strokes: 12, words: "菩薩" },
        { char: "嫂", radical: "女部",  strokes: 13, words: "嫂嫂、大嫂" },
        { char: "聖", radical: "耳部",  strokes: 13, words: "聖火、聖人、聖地" },
        { char: "乃", radical: "丿部",  strokes: 2,  words: "乃至、乃是" },
        { char: "丹", radical: "丶部",  strokes: 4,  words: "丹藥、牡丹、丹青" },
        { char: "唉", radical: "口部",  strokes: 10, words: "唉聲嘆氣、唉呀" },
        { char: "扇", radical: "戶部",  strokes: 10, words: "扇子、風扇、吊扇" },
        { char: "齊", radical: "齊部",  strokes: 14, words: "整齊、齊心、齊全" },
        { char: "焰", radical: "火部",  strokes: 12, words: "火焰、烈焰、氣焰" },
        { char: "層", radical: "尸部",  strokes: 15, words: "樓層、層次、層層" },
        { char: "翠", radical: "羽部",  strokes: 14, words: "翠綠、翡翠、翠鳥" },
        { char: "蒙", radical: "艸部",  strokes: 14, words: "啟蒙、蒙面、蒙羞" },
        { char: "肺", radical: "肉部",  strokes: 8,  words: "肺臟、肺腑、肺炎" },
        { char: "狀", radical: "犬部",  strokes: 8,  words: "形狀、狀態、告狀" },
        { char: "危", radical: "卩部",  strokes: 6,  words: "危險、危機、危害" },
        { char: "藤", radical: "艸部",  strokes: 19, words: "藤蔓、紫藤、藤條" },
        { char: "臨", radical: "臣部",  strokes: 17, words: "臨時、降臨、面臨" },
        { char: "霧", radical: "雨部",  strokes: 19, words: "大霧、霧氣、迷霧" },
        { char: "犧", radical: "牛部",  strokes: 20, words: "犧牲" },
        { char: "閱", radical: "門部",  strokes: 15, words: "閱讀、閱覽、訂閱" },
        { char: "欄", radical: "木部",  strokes: 21, words: "欄杆、專欄、布告欄" },
        { char: "讚", radical: "言部",  strokes: 26, words: "讚美、讚賞、讚許" },
        { char: "響", radical: "音部",  strokes: 22, words: "響亮、影響、音響" },
        { char: "務", radical: "力部",  strokes: 11, words: "任務、服務、公務" },
        { char: "任", radical: "人部",  strokes: 6,  words: "任何、擔任、任用" },
        { char: "踴", radical: "足部",  strokes: 14, words: "踴躍、踴身" },
        { char: "捐", radical: "手部",  strokes: 10, words: "捐款、捐贈、捐助" }
    ],

    // 改錯字 (20題)
    errors: [
        { sentence: "這件事很嚴重，爺爺親自走一<span class='wrong-char-hl'>躺</span>公司。", wrong: "躺", right: "趟", bopo: "ㄊㄤˋ" },
        { sentence: "陽光穿<span class='wrong-char-hl'>秀</span>過窗簾，光線直射進臥室。", wrong: "秀", right: "透", bopo: "ㄊㄡˋ" },
        { sentence: "媽媽運用<span class='wrong-char-hl'>朽</span>思，把剩飯變成可口的五色炒飯。", wrong: "朽", right: "巧", bopo: "ㄑㄧㄠˇ" },
        { sentence: "你想加入就必須遵守遊戲<span class='wrong-char-hl'>歸責</span>。", wrong: "歸責", right: "規則", bopo: "ㄍㄨㄟ ㄗㄜˊ" },
        { sentence: "我們做事絕不能<span class='wrong-char-hl'>半塗</span>而廢。", wrong: "半塗", right: "半途", bopo: "ㄅㄢˋ ㄊㄨˊ" },
        { sentence: "藥品不是萬靈<span class='wrong-char-hl'>舟</span>，要靠均衡的飲食和適度運動。", wrong: "舟", right: "丹", bopo: "ㄉㄢ" },
        { sentence: "母親節到了，我準備了一束康<span class='wrong-char-hl'>及</span>馨給媽媽。", wrong: "及", right: "乃", bopo: "ㄋㄞˇ" },
        { sentence: "她想成為一名優秀的<span class='wrong-char-hl'>笆</span>蕾舞者。", wrong: "笆", right: "芭", bopo: "ㄅㄚ" },
        { sentence: "媽媽總是將家中物品擺放整<span class='wrong-char-hl'>齋</span>。", wrong: "齋", right: "齊", bopo: "ㄑㄧˊ" },
        { sentence: "運動員點燃<span class='wrong-char-hl'>勝</span>火，揭開運動會比賽的序幕。", wrong: "勝", right: "聖", bopo: "ㄕㄥˋ" },
        { sentence: "這種植物的葉子形<span class='wrong-char-hl'>壯</span>像手掌，相當有趣。", wrong: "壯", right: "狀", bopo: "ㄓㄨㄤˋ" },
        { sentence: "姐姐很不舒服，臉色十分<span class='wrong-char-hl'>倉</span>白。", wrong: "倉", right: "蒼", bopo: "ㄘㄤ" },
        { sentence: "妹妹，你的衣服太單<span class='wrong-char-hl'>簿</span>了，小心感冒。", wrong: "簿", right: "薄", bopo: "ㄅㄛˊ" },
        { sentence: "春雨後，小樹冒出<span class='wrong-char-hl'>萃</span>綠的新芽。", wrong: "萃", right: "翠", bopo: "ㄘㄨㄟˋ" },
        { sentence: "端午節是週四，所以週五彈<span class='wrong-char-hl'>姓</span>放假一天。", wrong: "姓", right: "性", bopo: "ㄒㄧㄥˋ" },
        { sentence: "同學們圍在布告<span class='wrong-char-hl'>攔</span>前，查看最新的比賽成績。", wrong: "攔", right: "欄", bopo: "ㄌㄢˊ" },
        { sentence: "農民們正忙著在田裡收<span class='wrong-char-hl'>獲</span>。", wrong: "獲", right: "穫", bopo: "ㄏㄨㄛˋ" },
        { sentence: "這次義賣的所得將全數<span class='wrong-char-hl'>娟</span>給孤兒院。", wrong: "娟", right: "捐", bopo: "ㄐㄨㄢ" },
        { sentence: "這次的政策變動，對經濟產生了巨大的影<span class='wrong-char-hl'>想</span>。", wrong: "想", right: "響", bopo: "ㄒㄧㄤˇ" },
        { sentence: "他優異的表現贏得了師長的一致<span class='wrong-char-hl'>鑽</span>揚。", wrong: "鑽", right: "讚", bopo: "ㄗㄢˋ" }
    ],

    // 短語 (7題)
    phrases: [
        { orig: "從（山頭）（緩緩）（升起）", struct: "從（地方）（副詞/疊字）（動詞）", ex: "從（天邊）（漸漸）（落下）" },
        { orig: "滿（樹）的（紅黃錯落）", struct: "滿（名詞）的（四字形容詞）", ex: "滿（天）的（繁星點點）" },
        { orig: "一（搧）（熄火），二（搧）（生風），三（搧）可（下雨）", struct: "一（動詞）（動作1），二（動詞）（動作2），三（動詞）可（動作3）", ex: "一（踏）（出發），二（踏）（加速），三（踏）可（飛天）" },
        { orig: "（穿）過（層層）（薄霧）", struct: "（動詞）過（疊字量詞）（名詞）", ex: "（跨）過（重重）（難關）" },
        { orig: "一（筆）一（畫）", struct: "一（量詞）一（量詞）", ex: "一（朝）一（夕） / 一（言）一（行）" },
        { orig: "（熱烈）的（討論）起來", struct: "（形容詞）的（動詞）起來", ex: "（開懷）的（大笑）起來" },
        { orig: "（讚許）的（點點頭）", struct: "（形容詞）的（動作）", ex: "（無奈）的（嘆口氣）" }
    ],

    // 造句 (7題)
    sentences: [
        { pattern: "不僅……也……更……", examples: ["他不僅功課好，體育表現也相當突出，更是班上的模範生。"] },
        { pattern: "緩緩—", examples: ["夕陽緩緩落下，將整片天空染成了美麗的橘紅色。"] },
        { pattern: "竟然—", examples: ["我沒想到這道看似複雜的數學題，他竟然只花了一分鐘就解出來了！"] },
        { pattern: "聽說……千萬……", examples: ["聽說這次的颱風威力非常驚人，大家千萬要做好防颱準備，不要出門。"] },
        { pattern: "但……卻……", examples: ["這件衣服雖然很便宜，但它的材質卻非常舒服，真的很划算。"] },
        { pattern: "為了……而……", examples: ["哥哥為了考上理想的大學而日夜苦讀，這份努力令人敬佩。"] },
        { pattern: "沒想到……居然……", examples: ["真沒想到這顆小小的種子，經過一年的照顧後，居然長成了這麼高的向日葵！"] }
    ],

    // 課文問答 (8題)
    qa: [
        { lesson: "第九課《單車遊日月潭》", question: "讀懂路線圖對於遊客會有什麼幫助？", answer: "能掌握行程距離和沿途路況，以及可以欣賞到的風景。其中的小叮嚀更可以做為旅行的參考。" },
        { lesson: "第九課《單車遊日月潭》", question: "若是想要在日月潭欣賞落羽松，請問要到哪裡欣賞？", answer: "向山自行車道。" },
        { lesson: "第十課《孫悟空三借芭蕉扇》", question: "唐三藏與孫悟空是什麼關係？", answer: "師徒關係。" },
        { lesson: "第十課《孫悟空三借芭蕉扇》", question: "為什麼鐵扇公主不願意借孫悟空芭蕉扇？", answer: "因為孫悟空害她不能和自己的兒子紅孩兒相見。" },
        { lesson: "第十一課《最後一片葉子》", question: "為什麼最後一片葉子能不被風雨摧毀？", answer: "因為那片葉子是老畫家在風雨之裡，拚命地將最後一片葉子畫在牆上。" },
        { lesson: "第十一課《最後一片葉子》", question: "老畫家是一個什麼樣的人？", answer: "老畫家是一個熱心的人，為了幫助別人，連自己的生命安全都不顧，只為了幫助別人。" },
        { lesson: "第十二課《閱讀課》", question: "這堂閱讀課主要在討論什麼？", answer: "「閱讀最後一片葉子」的故事心得。。" },
        { lesson: "第十二課《閱讀課》", question: "為什麼秀秀的發言會引起大家熱烈的討論？", answer: "大家發現原來自己也可以像老畫家一樣幫助別人。" }
    ],

    vocabmatchA: {
        bank: [
            // 第 9 課：①邊際 ②山明水秀 ③看似 ④巧妙 ⑤規劃 ⑥賞心悅目
            "邊際", "山明水秀", "看似", "巧妙", "規劃", "賞心悅目",
            // 第 10 課：①熄火 ②乃 ③擔心 ④搧 ⑤火焰 ⑥嫂嫂
            "熄火", "乃", "擔心", "搧", "火焰", "嫂嫂"
        ],
        questions: [
            // 第 9 課題目順序與考卷完全相同
            { definition: "精巧美妙。", answer: "巧妙" },
            { definition: "界線、盡頭。", answer: "邊際" },
            { definition: "籌謀策畫。", answer: "規劃" },
            { definition: "因欣賞美好的事物而心情舒暢。", answer: "賞心悅目" },
            { definition: "看起來像是。", answer: "看似" },
            { definition: "形容山水秀麗，風景優美。", answer: "山明水秀" },
            // 第 10 課題目順序與考卷完全相同
            { definition: "將火熄滅。", answer: "熄火" },
            { definition: "掛念、不放心。", answer: "擔心" },
            { definition: "稱謂，稱哥哥的妻子。", answer: "嫂嫂" },
            { definition: "燃燒時發出的光焰。", answer: "火焰" },
            { definition: "搖動扇子使空氣流動而生風。", answer: "搧" },
            { definition: "是。", answer: "乃" }
        ]
    },
    vocabmatchB: {
        bank: [
            // 第 11 課：①嚴重 ②翠綠 ③來臨 ④危急 ⑤蒙 ⑥蒼白
            "嚴重", "翠綠", "來臨", "危急", "蒙", "蒼白",
            // 第 12 課：①任務 ②捐 ③收穫 ④閱讀 ⑤踴躍 ⑥布告欄
            "任務", "捐", "收穫", "閱讀", "踴躍", "布告欄"
        ],
        questions: [
            // 第 11 課題目順序與考卷完全相同
            { definition: "來到、降臨。", answer: "來臨" },
            { definition: "危險急迫。", answer: "危急" },
            { definition: "如翡翠般的青綠色。", answer: "翠綠" },
            { definition: "形容人的臉色白而微青、沒有血色。", answer: "蒼白" },
            { definition: "情勢緊急危險、影響很大。", answer: "嚴重" },
            { definition: "覆蓋、遮住。", answer: "蒙" },
            // 第 12 課題目順序與考卷完全相同
            { definition: "泛指得到成果或利益。", answer: "收穫" },
            { definition: "擔任的職務或使命。", answer: "任務" },
            { definition: "閱覽誦讀。", answer: "閱讀" },
            { definition: "反應熱烈，樂於從事。", answer: "踴躍" },
            { definition: "奉獻財物幫助別人。", answer: "捐" },
            { definition: "學校會機關團體張貼布告的地方。", answer: "布告欄" }
        ]
    },

    // 生詞辨別 (12題) — 兩個形近字填空
    discrim: [
        {
            sentence: "她在湖邊___望，看見倒___在水中的山影。",
            blanks: ["遠", "映"],
            options: [["遠", "忘"], ["映", "印"]],
            // which blank uses which option set: blank 0 → options[0], blank 1 → options[1]
            answers: ["遠", "映"]
        },
        {
            sentence: "他___試了很多次，終於___功過關。",
            blanks: ["嘗", "成"],
            options: [["嘗","常"], ["成","城"]],
            answers: ["嘗", "成"]
        },
        {
            sentence: "孫悟空___取了芭___扇。",
            blanks: ["借", "蕉"],
            options: [["借","措"], ["蕉","焦"]],
            answers: ["借", "蕉"]
        },
        {
            sentence: "窮___的貝爾曼仍然熱___藝術，從未放棄。",
            blanks: ["困", "愛"],
            options: [["困","睏"], ["愛","礙"]],
            answers: ["困", "愛"]
        },
        {
            sentence: "同學___躍地舉手，發___意見。",
            blanks: ["踴", "表"],
            options: [["踴","涌"], ["表","錶"]],
            answers: ["踴", "表"]
        },
        {
            sentence: "___皮擦掉了，我去找___長借一支鉛筆。",
            blanks: ["橡", "班"],
            options: [["橡","像"], ["班","搬"]],
            answers: ["橡", "班"]
        },
        {
            sentence: "他___穿過薄___，站在山頂遠望。",
            blanks: ["緩", "霧"],
            options: [["緩","援"], ["霧","務"]],
            answers: ["緩", "霧"]
        },
        {
            sentence: "她的歌聲___亮，___音繞梁。",
            blanks: ["響", "餘"],
            options: [["響","想"], ["餘","余"]],
            answers: ["響", "餘"]
        },
        {
            sentence: "大家___烈討論，___得了許多新知識。",
            blanks: ["熱", "獲"],
            options: [["熱","喝"], ["獲","穫"]],
            answers: ["熱", "獲"]
        },
        {
            sentence: "我讀完這本書，___得滿滿，要寫一篇___告。",
            blanks: ["收", "報"],
            options: [["收","守"], ["報","抱"]],
            answers: ["收", "報"]
        },
        {
            sentence: "老師___予我們很多鼓___，讓我們更有自信。",
            blanks: ["給", "勵"],
            options: [["給","級"], ["勵","歷"]],
            answers: ["給", "勵"]
        },
        {
            sentence: "捐___幫助別人，是一件___義的好事。",
            blanks: ["款", "正"],
            options: [["款","歎"], ["正","征"]],
            answers: ["款", "正"]
        }
    ],

    // 看圖猜成語 (3題)
    idioms: [
        {
            title: "餘音繞梁",
            bopo: "ㄩˊ ㄧㄣ ㄖㄠˋ ㄌㄧㄤˊ",
            img: "file:///C:/Users/elisa/.gemini/antigravity/brain/07f1da14-79bf-4967-86ab-9c5588c3d78e/idiom1_yu_yin_rao_liang_1783107061555.jpg"
        },
        {
            title: "呼風喚雨",
            bopo: "ㄏㄨ ㄈㄥ ㄏㄨㄢˋ ㄩˇ",
            img: "file:///C:/Users/elisa/.gemini/antigravity/brain/07f1da14-79bf-4967-86ab-9c5588c3d78e/idiom2_hu_feng_huan_yu_1783107120737.jpg"
        },
        {
            title: "捷足先登",
            bopo: "ㄐㄧㄝˊ ㄗㄨˊ ㄒㄧㄢ ㄉㄥ",
            img: "file:///C:/Users/elisa/.gemini/antigravity/brain/07f1da14-79bf-4967-86ab-9c5588c3d78e/idiom3_jie_zu_xian_deng_1783107183824.jpg"
        }
    ],

    // 射氣球生字分組 (A組為 1-18，B組為 19-35 + 其他生字，確保兩組題目不同)
    balloonWordsA: [
        "臺灣", "清晨", "嘗試", "騎單車", "環湖", "倒映", "遠望", "落羽松", "搭船",
        "鐵扇公主", "菩薩", "擔心", "口訣", "寶貝", "牛魔王", "慌張", "病情", "瘦弱"
    ],
    balloonWordsB: [
        "賺錢", "意志", "破爛", "感傷", "鼓舞", "窮困", "頂樓", "合租", "橡皮擦",
        "道謝", "無比", "轉學", "任務", "討論", "心得", "園遊會", "報告", "整齊", "踴躍"
    ],

    // 幸運抽獎 (15項)
    lottery: [
        "唱一首歌 +3分 🎤",
        "原地左轉3圈，右轉3圈 +2分 🌀",
        "唸一首繞口令 +2分 🗣️",
        "上課特別認真 +2分 🌟",
        "課堂互動極度踴躍 +2分 🙋",
        "努力上進表現優良 +2分 🏆",
        "唱一首可愛兒歌 +3分 🎵",
        "全組人口含一口水從1數到10 +2分 💧",
        "課堂互動大加分 +3分 🔥",
        "上課發言積極 +2分 💬",
        "哈哈！學企鵝走路 15 秒 +1分 🐧",
        "努力作答並回答問題 +3分 💡",
        "去跟家人或老師擊掌 +2分 ✋",
        "全組人一起模仿企鵝走路 +1分 ❄️",
        "學猴子叫 3 聲並抓頭 +2分 🐒"
    ]
};

// ==========================================
// 音效
// ==========================================
class SoundEffects {
    constructor() { this.ctx = null; this.muted = false; }

    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    playCorrect() {
        if (this.muted) return; this.init();
        const t = this.ctx.currentTime;
        this.tone(523.25, 'sine', t, 0.15);
        this.tone(659.25, 'sine', t + 0.1, 0.15);
        this.tone(783.99, 'sine', t + 0.2, 0.3);
    }
    playWrong() {
        if (this.muted) return; this.init();
        const t = this.ctx.currentTime;
        this.tone(220, 'sawtooth', t, 0.2);
        this.tone(196, 'sawtooth', t + 0.15, 0.4);
    }
    playWin() {
        if (this.muted) return; this.init();
        const t = this.ctx.currentTime;
        [523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5].forEach((f,i)=>this.tone(f,'sine',t+i*0.08,0.15));
    }
    playPop() {
        if (this.muted) return; this.init();
        const t = this.ctx.currentTime;
        this.tone(600,'triangle',t,0.06,0.6);
        this.tone(300,'triangle',t+0.04,0.1,0.4);
    }
    playTick() {
        if (this.muted) return; this.init();
        this.tone(800,'sine',this.ctx.currentTime,0.03,0.2);
    }
    playTimeUp() {
        if (this.muted) return; this.init();
        const t = this.ctx.currentTime;
        this.tone(300,'sawtooth',t,0.3);
        this.tone(300,'sawtooth',t+0.35,0.3);
    }
    tone(freq,type,start,dur,vol=0.5) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq,start);
        gain.gain.setValueAtTime(vol,start);
        gain.gain.exponentialRampToValueAtTime(0.01,start+dur);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(start); osc.stop(start+dur);
    }
}
const sfx = new SoundEffects();

// ==========================================
// UI Controller
// ==========================================
const UI = {
    dictIdx: 0, radIdx: 0, errIdx: 0, phraseIdx: 0,
    sentIdx: 0, qaIdx: 0, idiomIdx: 0,
    dictCorrectCount: 0,
    vocabIdx: 0, vocabCorrectCount: 0,
    discrimIdx: 0, discrimCorrectCount: 0, discrimAnswered: false,
    radTimer: null, radTimeLeft: 60,
    balloonActive: false, balloonScore: 0, balloonTimers: [],
    balloonGroup: 'A', // 記錄當前挑戰是 'A' 還是 'B'
    vocabGroup: 'A', // 記錄語詞解釋挑戰組別 'A' 或是 'B'

    init() {
        // 音效開關
        document.getElementById('muteBtn').addEventListener('click', () => {
            sfx.muted = !sfx.muted;
            document.getElementById('muteBtn').innerHTML = sfx.muted ? '<span class="icon">🔇</span>' : '<span class="icon">🔊</span>';
            sfx.init();
        });

        // 首頁按鈕
        document.getElementById('startBtn').addEventListener('click', () => {
            sfx.init();
            this.switchScene('lobby');
        });

        // 返回首頁
        document.querySelector('.btn-back-home').addEventListener('click', () => this.switchScene('home'));

        // 主選單翻牌邏輯 (先翻牌顯示單元名稱，點 GO 才進入)
        document.querySelectorAll('.lobby-card').forEach(card => {
            card.addEventListener('click', e => {
                const inner = card.querySelector('.lobby-card-inner');
                const goBtn = card.querySelector('.card-go');
                // 若點擊的是 GO 按鈕 → 進入單元
                if (e.target === goBtn || goBtn.contains(e.target)) {
                    const target = card.getAttribute('data-target');
                    this.switchScene(target);
                    this.loadActivity(target);
                    return;
                }
                // 否則翻牌/翻回
                card.classList.toggle('flipped');
            });
        });

        // 各單元「主選單」按鈕
        document.querySelectorAll('.btn-lobby').forEach(btn => {
            btn.addEventListener('click', () => {
                this.stopTimer();
                this.stopBalloons();
                // 翻回所有選單卡片
                document.querySelectorAll('.lobby-card').forEach(c => c.classList.remove('flipped'));
                this.switchScene('lobby');
            });
        });

        this.bindEvents();
    },

    switchScene(id) {
        document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    },

    loadActivity(type) {
        switch(type) {
            case 'dictation':
                this.dictIdx = 0; this.dictCorrectCount = 0; this.showDictation(); break;
            case 'radicals':
                this.radIdx = 0; this.stopTimer();
                this.radTimeLeft = 60;
                document.getElementById('timerVal').innerText = 60;
                document.getElementById('radicalCard').classList.remove('flipped');
                document.getElementById('startTimerBtn').style.display = 'inline-block';
                document.getElementById('resetTimerBtn').style.display = 'none';
                this.showRadical(); break;
            case 'errors':   this.errIdx = 0;      this.showError();    break;
            case 'phrases':  this.phraseIdx = 0;   this.showPhrase();   break;
            case 'sentences':this.sentIdx = 0;     this.showSentence(); break;
            case 'qa':       this.qaIdx = 0;       this.showQa();       break;
            case 'vocabmatch': this.initVocab();   break;
            case 'discrim':  this.discrimIdx = 0; this.discrimCorrectCount = 0; this.showDiscrim(); break;
            case 'idioms':   this.idiomIdx = 0;    this.showIdiom();    break;
            case 'balloons': this.initBalloons();  break;
            case 'lottery':  this.initLottery();   break;
        }
    },

    bindEvents() {
        // 1. 聽寫
        document.getElementById('btnSpeak').addEventListener('click', () => this.speakWord());
        document.getElementById('opt1').addEventListener('click', e => this.checkDictation(e));
        document.getElementById('opt2').addEventListener('click', e => this.checkDictation(e));
        document.getElementById('dictPrev').addEventListener('click', () => { if(this.dictIdx>0){this.dictIdx--;this.showDictation();} });
        document.getElementById('dictNext').addEventListener('click', () => { if(this.dictIdx<DATA.dictation.length-1){this.dictIdx++;this.showDictation();} });

        // 2. 部首
        document.getElementById('radicalCard').addEventListener('click', () => document.getElementById('radicalCard').classList.toggle('flipped'));
        document.getElementById('radPrev').addEventListener('click', () => { if(this.radIdx>0){this.radIdx--;document.getElementById('radicalCard').classList.remove('flipped');setTimeout(()=>this.showRadical(),150);} });
        document.getElementById('radNext').addEventListener('click', () => { if(this.radIdx<DATA.radicals.length-1){this.radIdx++;document.getElementById('radicalCard').classList.remove('flipped');setTimeout(()=>this.showRadical(),150);} });
        document.getElementById('startTimerBtn').addEventListener('click', () => this.startTimer());
        document.getElementById('resetTimerBtn').addEventListener('click', () => this.resetTimer());

        // 3. 改錯字
        document.getElementById('btnShowErrAns').addEventListener('click', () => {
            const box = document.getElementById('errAnswerBox');
            box.classList.toggle('hidden');
            if (!box.classList.contains('hidden')) {
                const item = DATA.errors[this.errIdx];
                const spans = document.querySelectorAll('#errSentence .clickable-char');
                spans.forEach(span => {
                    if (span.innerText === item.wrong) {
                        span.classList.add('char-wrong-marked');
                    }
                });
            }
        });
        document.getElementById('errPrev').addEventListener('click', () => { if(this.errIdx>0){this.errIdx--;this.showError();} });
        document.getElementById('errNext').addEventListener('click', () => { if(this.errIdx<DATA.errors.length-1){this.errIdx++;this.showError();} });

        // 4. 短語
        document.getElementById('btnShowPhraseAns').addEventListener('click', () => document.getElementById('phraseExample').classList.toggle('hidden'));
        document.getElementById('phrasePrev').addEventListener('click', () => { if(this.phraseIdx>0){this.phraseIdx--;this.showPhrase();} });
        document.getElementById('phraseNext').addEventListener('click', () => { if(this.phraseIdx<DATA.phrases.length-1){this.phraseIdx++;this.showPhrase();} });

        // 5. 造句
        document.getElementById('sentPrev').addEventListener('click', () => { if(this.sentIdx>0){this.sentIdx--;this.showSentence();} });
        document.getElementById('sentNext').addEventListener('click', () => { if(this.sentIdx<DATA.sentences.length-1){this.sentIdx++;this.showSentence();} });

        // 6. 問答
        document.getElementById('btnShowQaAns').addEventListener('click', () => document.getElementById('qaAnswer').classList.toggle('hidden'));
        document.getElementById('qaPrev').addEventListener('click', () => { if(this.qaIdx>0){this.qaIdx--;this.showQa();} });
        document.getElementById('qaNext').addEventListener('click', () => { if(this.qaIdx<DATA.qa.length-1){this.qaIdx++;this.showQa();} });

        // 7. 語詞解釋
        document.getElementById('startVocabBtnA').addEventListener('click', () => this.startVocab('A'));
        document.getElementById('startVocabBtnB').addEventListener('click', () => this.startVocab('B'));
        document.getElementById('vocabPrev').addEventListener('click', () => { 
            if(this.vocabIdx > 0) { 
                this.vocabIdx--; 
                this.showVocab(); 
            } 
        });
        document.getElementById('vocabNext').addEventListener('click', () => { 
            const limit = this.vocabGroup === 'A' ? DATA.vocabmatchA.questions.length : DATA.vocabmatchB.questions.length;
            if(this.vocabIdx < limit - 1) { 
                this.vocabIdx++; 
                this.showVocab(); 
            } 
        });

        // 8. 生詞辨別
        document.getElementById('discrimPrev').addEventListener('click', () => { if(this.discrimIdx>0){this.discrimIdx--;this.showDiscrim();} });
        document.getElementById('discrimNext').addEventListener('click', () => { if(this.discrimIdx<DATA.discrim.length-1){this.discrimIdx++;this.showDiscrim();} });

        // 9. 成語
        document.getElementById('btnShowIdiomAns').addEventListener('click', () => document.getElementById('idiomAnswer').classList.toggle('hidden'));
        document.getElementById('idiomPrev').addEventListener('click', () => { if(this.idiomIdx>0){this.idiomIdx--;this.showIdiom();} });
        document.getElementById('idiomNext').addEventListener('click', () => { if(this.idiomIdx<DATA.idioms.length-1){this.idiomIdx++;this.showIdiom();} });

        // 10. 射氣球
        document.getElementById('startBalloonBtnA').addEventListener('click', () => this.startBalloons('A'));
        document.getElementById('startBalloonBtnB').addEventListener('click', () => this.startBalloons('B'));

        // 11. 幸運抽獎
        document.getElementById('shuffleLotteryBtn').addEventListener('click', () => this.shuffleLottery());
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('modalConfirm').addEventListener('click', () => this.closeModal());
    },

    // ---- 1. 聽寫選字 ----
    showDictation() {
        const item = DATA.dictation[this.dictIdx];
        document.getElementById('dictPage').innerText = `${this.dictIdx+1}/${DATA.dictation.length}`;
        document.getElementById('dictFeedback').className = 'feedback-msg';
        document.getElementById('dictFeedback').innerText = '';
        document.getElementById('dictScore').innerText = this.dictCorrectCount;
        document.getElementById('dictTotal').innerText = DATA.dictation.length;

        const rand = Math.random() > 0.5;
        const opt1 = document.getElementById('opt1');
        const opt2 = document.getElementById('opt2');
        opt1.className = 'option-btn'; opt2.className = 'option-btn';
        opt1.disabled = false; opt2.disabled = false;

        if (rand) {
            opt1.innerText = `1. ${item.word}`; opt1.setAttribute('data-correct','true');
            opt2.innerText = `2. ${item.wrong}`; opt2.setAttribute('data-correct','false');
        } else {
            opt1.innerText = `1. ${item.wrong}`; opt1.setAttribute('data-correct','false');
            opt2.innerText = `2. ${item.word}`; opt2.setAttribute('data-correct','true');
        }
        setTimeout(() => this.speakWord(), 400);
    },
    speakWord() {
        const word = DATA.dictation[this.dictIdx].word;
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utt = new SpeechSynthesisUtterance(word);
            utt.lang = 'zh-TW'; utt.rate = 0.8;
            window.speechSynthesis.speak(utt);
        }
    },
    checkDictation(e) {
        const btn = e.target;
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        const opt1 = document.getElementById('opt1');
        const opt2 = document.getElementById('opt2');
        const fb = document.getElementById('dictFeedback');
        opt1.disabled = true; opt2.disabled = true;

        if (isCorrect) {
            btn.classList.add('correct-choice');
            fb.innerText = '答對了！你真棒！ 🎉'; fb.className = 'feedback-msg correct';
            this.dictCorrectCount++;
            document.getElementById('dictScore').innerText = this.dictCorrectCount;
            sfx.playCorrect();
        } else {
            btn.classList.add('wrong-choice');
            if(opt1.getAttribute('data-correct')==='true') opt1.classList.add('correct-choice');
            if(opt2.getAttribute('data-correct')==='true') opt2.classList.add('correct-choice');
            fb.innerText = '答錯了，再接再厲！'; fb.className = 'feedback-msg wrong';
            sfx.playWrong();
        }
    },

    // ---- 2. 部首造詞 ----
    showRadical() {
        const item = DATA.radicals[this.radIdx];
        document.getElementById('radPage').innerText = `${this.radIdx+1}/${DATA.radicals.length}`;
        document.getElementById('radChar').innerText = item.char;
        document.getElementById('radName').innerText = item.radical;
        document.getElementById('radStrokes').innerText = `${item.strokes} 畫`;
        document.getElementById('radWords').innerText = item.words;
    },
    startTimer() {
        this.stopTimer(); this.radTimeLeft = 60;
        document.getElementById('timerVal').innerText = 60;
        document.getElementById('startTimerBtn').style.display = 'none';
        document.getElementById('resetTimerBtn').style.display = 'inline-block';
        this.radTimer = setInterval(() => {
            this.radTimeLeft--;
            document.getElementById('timerVal').innerText = this.radTimeLeft;
            if (this.radTimeLeft <= 10 && this.radTimeLeft > 0) sfx.playTick();
            if (this.radTimeLeft <= 0) { this.stopTimer(); sfx.playTimeUp(); alert('時間到！'); }
        }, 1000);
    },
    stopTimer() { if(this.radTimer){clearInterval(this.radTimer);this.radTimer=null;} },
    resetTimer() {
        this.stopTimer(); this.radTimeLeft = 60;
        document.getElementById('timerVal').innerText = 60;
        document.getElementById('startTimerBtn').style.display = 'inline-block';
        document.getElementById('resetTimerBtn').style.display = 'none';
    },

    // ---- 3. 改錯字 ----
    showError() {
        const item = DATA.errors[this.errIdx];
        document.getElementById('errPage').innerText = `${this.errIdx+1}/${DATA.errors.length}`;
        document.getElementById('errWrong').innerText = item.wrong;
        document.getElementById('errRight').innerText = item.right;
        document.getElementById('errBopo').innerText = item.bopo;
        document.getElementById('errAnswerBox').classList.add('hidden');

        // 去除 HTML 標籤取得純文字句子
        const cleanText = item.sentence.replace(/<[^>]*>/g, '');
        const sentenceEl = document.getElementById('errSentence');
        sentenceEl.innerHTML = '';

        // 逐字拆解並加上點擊事件
        [...cleanText].forEach(char => {
            const span = document.createElement('span');
            span.className = 'clickable-char';
            span.innerText = char;
            span.addEventListener('click', () => {
                // 判斷是否點選到正確的錯字
                if (char === item.wrong) {
                    span.classList.add('char-wrong-marked');
                    sfx.playCorrect();
                    document.getElementById('errAnswerBox').classList.remove('hidden');
                } else {
                    sfx.playWrong();
                }
            });
            sentenceEl.appendChild(span);
        });
    },

    // ---- 4. 短語 ----
    showPhrase() {
        const item = DATA.phrases[this.phraseIdx];
        document.getElementById('phrasePage').innerText = `${this.phraseIdx+1}/${DATA.phrases.length}`;
        document.getElementById('phraseOrig').innerText = item.orig;
        document.getElementById('phraseStruct').innerText = item.struct;
        document.getElementById('phraseExText').innerText = item.ex;
        document.getElementById('phraseExample').classList.add('hidden');
    },

    // ---- 5. 造句 ----
    showSentence() {
        const item = DATA.sentences[this.sentIdx];
        document.getElementById('sentPage').innerText = `${this.sentIdx+1}/${DATA.sentences.length}`;
        document.getElementById('sentPattern').innerText = item.pattern;
        const list = document.getElementById('sentExList');
        list.innerHTML = '';
        item.examples.forEach(ex => { const li = document.createElement('li'); li.innerText = ex; list.appendChild(li); });
    },

    // ---- 6. 問答 ----
    showQa() {
        const item = DATA.qa[this.qaIdx];
        document.getElementById('qaPage').innerText = `${this.qaIdx+1}/${DATA.qa.length}`;
        document.getElementById('qaLesson').innerText = item.lesson;
        document.getElementById('qaQuestion').innerText = item.question;
        document.getElementById('qaAnswer').innerText = item.answer;
        document.getElementById('qaAnswer').classList.add('hidden');
    },

    // ---- 7. 語詞解釋 ----
    initVocab() {
        document.getElementById('vocabStartPanel').style.display = 'flex';
        document.getElementById('vocabQuestionCard').style.display = 'none';
        document.getElementById('vocabControls').style.display = 'none';
        document.getElementById('vocabScoreFloat').style.display = 'none';
        const titleEl = document.querySelector('#vocabmatch .nav-header .title');
        if (titleEl) {
            titleEl.innerText = `🐰 語詞解釋`;
        }
    },
    startVocab(group) {
        this.vocabGroup = group || 'A';
        this.vocabIdx = 0;
        this.vocabCorrectCount = 0;
        document.getElementById('vocabStartPanel').style.display = 'none';
        document.getElementById('vocabQuestionCard').style.display = 'block';
        document.getElementById('vocabControls').style.display = 'flex';
        document.getElementById('vocabScoreFloat').style.display = 'block';
        
        const titleEl = document.querySelector('#vocabmatch .nav-header .title');
        if (titleEl) {
            titleEl.innerText = `🐰 語詞解釋 (${this.vocabGroup} 組)`;
        }

        this.showVocab();
    },
    showVocab() {
        const sourceData = this.vocabGroup === 'A' ? DATA.vocabmatchA : DATA.vocabmatchB;
        const item = sourceData.questions[this.vocabIdx];
        
        document.getElementById('vocabPage').innerText = `${this.vocabIdx+1}/${sourceData.questions.length}`;
        document.getElementById('vocabScore').innerText = this.vocabCorrectCount;
        document.getElementById('vocabTotal').innerText = sourceData.questions.length;

        // 依據當前題目索引 (0-5 為第一課，6-11 為第二課)，取得該課對應的 6 個詞庫
        const isFirstHalf = this.vocabIdx < 6;
        const startIdx = isFirstHalf ? 0 : 6;
        const endIdx = isFirstHalf ? 6 : 12;
        
        const currentBank = sourceData.bank.slice(startIdx, endIdx);
        
        // 渲染語詞庫 (代號永遠是 ① 到 ⑥)
        const bankEl = document.getElementById('vocabBank');
        bankEl.innerHTML = '';
        const codes = ['①','②','③','④','⑤','⑥'];
        
        currentBank.forEach((word, i) => {
            const span = document.createElement('span');
            span.className = 'vocab-bank-item';
            span.innerHTML = `<span class="vocab-code">${codes[i]}</span><span class="vocab-word">${word}</span>`;
            bankEl.appendChild(span);
        });

        // 題目定義
        document.getElementById('vocabDef').innerText = item.definition;

        const optsEl = document.getElementById('vocabOpts');
        optsEl.innerHTML = '';
        document.getElementById('vocabFeedback').className = 'feedback-msg';
        document.getElementById('vocabFeedback').innerText = '';

        // 找出正確代號
        const correctCodeIdx = currentBank.indexOf(item.answer);
        const correctCode = codes[correctCodeIdx];

        // 顯示選項按鈕
        codes.forEach((code, idx) => {
            const btn = document.createElement('button');
            btn.className = 'vocab-opt-btn';
            btn.innerText = code;
            btn.addEventListener('click', () => {
                const allBtns = optsEl.querySelectorAll('.vocab-opt-btn');
                allBtns.forEach(b => b.disabled = true);
                const fb = document.getElementById('vocabFeedback');
                if (code === correctCode) {
                    btn.classList.add('correct-choice');
                    fb.innerText = `答對了！ ${code} 就是「${item.answer}」 🎉`;
                    fb.className = 'feedback-msg correct';
                    this.vocabCorrectCount++;
                    document.getElementById('vocabScore').innerText = this.vocabCorrectCount;
                    sfx.playCorrect();
                } else {
                    btn.classList.add('wrong-choice');
                    allBtns.forEach(b => {
                        if (b.innerText === correctCode) b.classList.add('correct-choice');
                    });
                    fb.innerText = `答錯！正確代號是 ${correctCode}「${item.answer}」`;
                    fb.className = 'feedback-msg wrong';
                    sfx.playWrong();
                }
            });
            optsEl.appendChild(btn);
        });
    },

    // ---- 8. 生詞辨別 ----
    showDiscrim() {
        const item = DATA.discrim[this.discrimIdx];
        document.getElementById('discrimPage').innerText = `${this.discrimIdx+1}/${DATA.discrim.length}`;
        document.getElementById('discrimScore').innerText = this.discrimCorrectCount;
        document.getElementById('discrimTotal').innerText = DATA.discrim.length;
        document.getElementById('discrimFeedback').className = 'feedback-msg';
        document.getElementById('discrimFeedback').innerText = '';
        this.discrimAnswered = false;

        // 解析句子：用 ___ 分割並插入空格顯示
        const sentEl = document.getElementById('discrimSentence');
        sentEl.innerText = item.sentence;

        // 選項區：對每個 blank 的選項分別顯示
        const optsEl = document.getElementById('discrimOpts');
        optsEl.innerHTML = '';
        // 簡化：顯示兩行選項，每行對應一個空格
        item.options.forEach((optPair, blankIdx) => {
            const group = document.createElement('div');
            group.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:10px;';
            const label = document.createElement('div');
            label.style.cssText = 'font-size:14px;color:#868e96;font-weight:bold;';
            label.innerText = `第${blankIdx+1}格`;
            group.appendChild(label);
            optPair.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'discrim-opt-btn';
                btn.innerText = opt;
                btn.addEventListener('click', () => {
                    if (this.discrimAnswered) return;
                    const allBtns = optsEl.querySelectorAll('.discrim-opt-btn');
                    allBtns.forEach(b => b.disabled = true);
                    this.discrimAnswered = true;

                    // 簡化判斷：若所有選中的都正確
                    const isCorrect = (opt === item.answers[blankIdx]);
                    const fb = document.getElementById('discrimFeedback');
                    if (isCorrect) {
                        btn.classList.add('correct-choice');
                        fb.innerText = '✅ 正確！'; fb.className = 'feedback-msg correct';
                        this.discrimCorrectCount++;
                        document.getElementById('discrimScore').innerText = this.discrimCorrectCount;
                        sfx.playCorrect();
                    } else {
                        btn.classList.add('wrong-choice');
                        fb.innerText = `❌ 錯！正確答案是「${item.answers[blankIdx]}」`;
                        fb.className = 'feedback-msg wrong';
                        sfx.playWrong();
                    }
                    // 重新啟用（只鎖住同組）
                    allBtns.forEach(b => b.disabled = false);
                    this.discrimAnswered = false;
                });
                group.appendChild(btn);
            });
            optsEl.appendChild(group);
        });
    },

    // ---- 9. 成語 ----
    showIdiom() {
        const item = DATA.idioms[this.idiomIdx];
        document.getElementById('idiomPage').innerText = `${this.idiomIdx+1}/${DATA.idioms.length}`;
        document.getElementById('idiomImg').src = item.img;
        document.getElementById('idiomAnswer').querySelector('h2').innerText = item.title;
        document.getElementById('idiomBopo').innerText = item.bopo;
        document.getElementById('idiomAnswer').classList.add('hidden');
    },

    // ---- 10. 射氣球 ----
    initBalloons() {
        this.balloonScore = 0;
        this.balloonActive = false;
        const panel = document.getElementById('balloonStartPanel');
        if (panel) { panel.style.display = 'flex'; }
        document.getElementById('balloonScoreFloat').style.display = 'none';
        // clear arena
        const arena = document.getElementById('balloonArena');
        Array.from(arena.querySelectorAll('.balloon')).forEach(b => b.remove());
    },
    startBalloons(group) {
        this.balloonActive = true;
        this.balloonScore = 0;
        this.balloonGroup = group || 'A';
        document.getElementById('balloonStartPanel').style.display = 'none';
        document.getElementById('balloonScoreFloat').style.display = 'block';
        document.getElementById('balloonScore').innerText = 0;
        
        // 更新標題為對應組別
        const titleEl = document.querySelector('#balloons .nav-header .title');
        if (titleEl) {
            titleEl.innerText = `🐸 射氣球 念生字 (${this.balloonGroup} 組)`;
        }

        this.spawnBalloonWave();
    },
    spawnBalloonWave() {
        if (!this.balloonActive) return;
        // 根據選擇的組別讀取 A組或 B組題目
        const sourceWords = this.balloonGroup === 'A' ? DATA.balloonWordsA : DATA.balloonWordsB;
        const words = [...sourceWords].sort(() => Math.random() - 0.5).slice(0, 8);
        words.forEach((word, i) => {
            const delay = i * 1500 + Math.random() * 800;
            const t = setTimeout(() => {
                if (!this.balloonActive) return;
                this.spawnBalloon(word);
            }, delay);
            this.balloonTimers.push(t);
        });
        // next wave after 14s
        const wt = setTimeout(() => {
            if (this.balloonActive) this.spawnBalloonWave();
        }, 14000);
        this.balloonTimers.push(wt);
    },
    spawnBalloon(word) {
        const arena = document.getElementById('balloonArena');
        const el = document.createElement('div');
        const colorIdx = Math.floor(Math.random() * 8);
        const leftPct = 5 + Math.random() * 80;
        const duration = 12 + Math.random() * 8; // 12-20s to float up naturally

        el.className = `balloon balloon-color-${colorIdx}`;
        el.style.left = `${leftPct}%`;
        el.style.bottom = '-160px';
        el.style.animationDuration = `${duration}s`;
        el.innerHTML = `
            <div class="balloon-body">
                <span class="balloon-word">${word}</span>
            </div>
            <div class="balloon-string"></div>
        `;

        el.addEventListener('click', () => {
            if (el.classList.contains('popped')) return;
            el.classList.add('popped');
            this.balloonScore++;
            document.getElementById('balloonScore').innerText = this.balloonScore;
            sfx.playPop();
            // speak the word
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utt = new SpeechSynthesisUtterance(word);
                utt.lang = 'zh-TW'; utt.rate = 0.85;
                window.speechSynthesis.speak(utt);
            }
            setTimeout(() => el.remove(), 450);
        });

        arena.appendChild(el);

        // Clean up DOM only after the CSS animation naturally ends (balloon exits top)
        el.addEventListener('animationend', () => el.remove());
    },
    stopBalloons() {
        this.balloonActive = false;
        this.balloonTimers.forEach(t => clearTimeout(t));
        this.balloonTimers = [];
        const arena = document.getElementById('balloonArena');
        if (arena) Array.from(arena.querySelectorAll('.balloon')).forEach(b => b.remove());
        const panel = document.getElementById('balloonStartPanel');
        if (panel) panel.style.display = 'flex';
        const scoreFloat = document.getElementById('balloonScoreFloat');
        if (scoreFloat) scoreFloat.style.display = 'none';

        // 重設標題
        const titleEl = document.querySelector('#balloons .nav-header .title');
        if (titleEl) {
            titleEl.innerText = `🐸 射氣球 念生字`;
        }
    },

    // ---- 11. 幸運抽獎 ----
    initLottery() { this.shuffleLottery(); },
    shuffleLottery() {
        const prizes = [...DATA.lottery];
        for(let i=prizes.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[prizes[i],prizes[j]]=[prizes[j],prizes[i]];}
        const grid = document.getElementById('lotteryGrid');
        grid.innerHTML = '';
        prizes.forEach(prize => {
            const card = document.createElement('div');
            card.className = 'lottery-card';
            card.innerHTML = `<div class="front-content">?</div><div class="back-content">${prize}</div>`;
            card.addEventListener('click', () => this.revealLottery(card, prize));
            grid.appendChild(card);
        });
    },
    revealLottery(card, prize) {
        if (card.classList.contains('revealed')) return;
        card.classList.add('revealed');
        sfx.playWin();
        setTimeout(() => {
            document.getElementById('modalPrize').innerText = prize;
            document.getElementById('lotteryModal').classList.add('active');
        }, 600);
    },
    closeModal() { document.getElementById('lotteryModal').classList.remove('active'); }
};

window.addEventListener('DOMContentLoaded', () => UI.init());
