# 互動式國語複習簡報實作計畫 (第九課～第十二課)

本計畫旨在將「第一次月考總複習.pdf」的簡報形式，替換為第九課至第十二課的考卷題目內容，並重新設計製作成一份**精美、現代化且具高度互動性**的 HTML5 網頁簡報。這份簡報非常適合老師在課堂上直接投影，帶領學生進行有趣的複習活動。

## 學生複習範圍與題目來源
將原簡報的第一至四課內容，替換為考卷中**第九課至第十二課**的題目：
*   **第九課**：《單車遊日月潭》
*   **第十課**：《孫悟空三借芭蕉扇》
*   **第十一課**：《最後一片葉子》
*   **第十二課**：《閱讀課》

---

## 網頁簡報互動功能設計

為了給予使用者「WOW」的視覺體驗，我們將採用現代網頁設計元素（如 Glassmorphism 磨砂玻璃、平滑漸層、3D 翻牌動畫、CSS 動態微交互），並設計以下互動功能：

1.  **可愛動物主選單**：
    *   重現原簡報的可愛動物網格選單。
    *   包含：**聽寫選字、部首造詞、改錯字挑戰、短語練習、造句展示、課文問答、看圖猜成語、幸運抽獎**八大板塊。
2.  **TTS 聽寫互動遊戲**：
    *   利用瀏覽器的語音合成 API (Web Speech Synthesis)，在點擊「播放聲音」時，會用語音唸出語詞。
    *   學生在畫面上選擇「1. 稻穢」或「2. 稻穗」等字音字形。點擊後會有即時的「對錯特效與音效」。
3.  **部首造詞挑戰 (內建 60 秒計時器)**：
    *   點擊開始，畫面會啟動 60 秒倒數計時。
    *   生字以 3D 翻轉卡片呈現，點擊卡片會翻開顯示其「部首」與「造詞」。
4.  **改錯字大挑戰**：
    *   展示考卷中 20 個改錯字題目。
    *   點擊「看解答」時，句子中的錯字會被劃掉，並以動畫彈出正確的字與注音。
5.  **短語與造句練習**：
    *   以卡片填空形式呈現。點擊後以滑動動畫顯示結構解析與精美範例。
6.  **看圖猜成語 (AI 生成精美插圖)**：
    *   保留原簡報的趣味，使用 AI 生成三張精美成語古風插圖（餘音繞梁、呼風喚雨、捷足先登），學生猜測後點擊顯示答案。
7.  **幸運抽獎牆**：
    *   15 格互動翻牌牆，點擊後會翻開隨機打亂的課堂獎懲卡片（如：唱首歌+3分、學企鵝走路+1分）。

---

## Proposed Changes

預計在 Scratch 目錄中建立一個獨立的專案資料夾：

### [Web Presentation]

#### [NEW] [index.html](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/index.html)
*   建立簡報的 DOM 結構。
*   包含主頁面、主選單、各單元的投影片視窗、幸運抽獎版塊、語音聽寫板塊等。

#### [NEW] [style.css](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/style.css)
*   使用 Vanilla CSS。
*   設計精美的漸層背景、可愛活潑的 UI 配色（針對國小四年級設計）。
*   實作 3D 翻牌動畫、倒數計時器動畫、磨砂玻璃面板等現代視覺效果。

#### [NEW] [app.js](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/app.js)
*   簡報切換邏輯。
*   TTS 語音播放與選項比對邏輯。
*   幸運抽獎牆的卡片打亂與翻牌狀態管理。
*   60 秒倒數計時器邏輯。
*   利用 Web Audio API 動態產生歡呼與答錯的音效，無需額外載入音檔。

#### [NEW] [assets/](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/assets/)
*   存放 AI 生成的成語插圖：
    1.  `idiom1_yu_yin_rao_liang.png` (餘音繞梁)
    2.  `idiom2_hu_feng_huan_yu.png` (呼風喚雨)
    3.  `idiom3_jie_zu_xian_deng.png` (捷足先登)

---

## Verification Plan

### Automated Tests
*   不適用。

### Manual Verification
1.  **本地伺服器測試**：
    *   使用 Python 的 `http.server` 在 `C:\Users\elisa\.gemini\antigravity\scratch\chinese-review-presentation` 目錄下啟動本地伺服器：
        ```powershell
        python -m http.server 8000
        ```
2.  **功能與視覺驗證**：
    *   使用瀏覽器子代理開啟 `http://localhost:8000`，手動測試各單元切換、語音發音、按鈕點擊、抽獎牆等互動功能。
    *   確認 UI 的視覺外觀精美且功能無誤。
