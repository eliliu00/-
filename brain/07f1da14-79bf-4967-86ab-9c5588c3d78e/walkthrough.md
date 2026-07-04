# 互動式國語複習簡報開發成果報告 (第九課～第十二課)

您好！我們已經成功利用考卷中的題目，為您將「第一次月考總複習.pdf」升級製作成了更具趣味、高度互動的 **HTML5 網頁簡報應用程式**。

這份簡報包含**第九課《單車遊日月潭》至第十二課《閱讀課》**的完整題庫，非常適合您直接用瀏覽器播放，在課堂上與學生進行互動複習。

---

## 🛠️ 開發檔案清單

所有程式碼與資源已為您建立在專案目錄：[chinese-review-presentation](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/)
1.  **[index.html](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/index.html)**：首頁、大選單以及 8 大複習單元的投影片結構。
2.  **[style.css](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/style.css)**：磨砂玻璃卡片 (Glassmorphism)、3D 翻牌動畫、白雲與群山漂浮動畫、粉嫩可愛配色。
3.  **[app.js](file:///C:/Users/elisa/.gemini/antigravity/scratch/chinese-review-presentation/app.js)**：簡報切換邏輯、**語音聽寫 (TTS)**、**翻牌抽獎牆**、**60秒計時器**以及用 Web Audio API 產生的**答對/答錯/計時提醒音效**。

---

## 💡 互動單元亮點

### 1. 🐨 聽寫選字 (TTS 語音互動)
*   **功能**：點擊「🔊 播放聲音」，網頁會使用語音合成唸出正確語詞，學生需要從兩個字音字形相近的選項中（如「觀察」vs「勸察」）點選正確答案。
*   **回饋**：點選後會有即時對錯判定、得分累計與答對/答錯音效。

### 2. 🐶 部首與造詞 (計時翻牌挑戰)
*   **功能**：生字以 3D 卡片呈現，點擊卡片會翻牌顯示其部首與造詞。
*   **計時**：內建「60秒倒數計時器」，在最後 10 秒會發出滴答聲，時間到發出警示音。

### 3. 🐱 改錯字、🦆 短語練習、🐊 造句展示、🐼 課文問答
*   **功能**：全部根據考卷題目精心排列。預設隱藏解答，點擊「顯示答案」後會以流暢的淡入動畫與色彩引導（例如將錯字用紅線劃掉，旁邊彈出正確的字與注音）。

### 4. 🐻 幸運抽獎卡片牆
*   **功能**：包含 15 張隨機打亂的卡片，學生點擊翻牌即可隨機抽出課堂互動獎懲，並會彈出恭喜視窗。提供「重新洗牌」按鈕，每堂課都有新樂趣！

### 5. 🦊 看圖猜成語 (AI 精美插圖)
*   簡報中完美整合了我們為您特別產生的三張精美古風成語插圖，以下是圖片預覽：

````carousel
![餘音繞梁](file:///C:/Users/elisa/.gemini/antigravity/brain/07f1da14-79bf-4967-86ab-9c5588c3d78e/idiom1_yu_yin_rao_liang_1783107061555.jpg)
<!-- slide -->
![呼風喚雨](file:///C:/Users/elisa/.gemini/antigravity/brain/07f1da14-79bf-4967-86ab-9c5588c3d78e/idiom2_hu_feng_huan_yu_1783107120737.jpg)
<!-- slide -->
![捷足先登](file:///C:/Users/elisa/.gemini/antigravity/brain/07f1da14-79bf-4967-86ab-9c5588c3d78e/idiom3_jie_zu_xian_deng_1783107183824.jpg)
````

---

## 🚀 老師如何開始播放？

由於本簡報為純前端網頁應用程式，**您不需要安裝任何伺服器或環境**，只要依照以下步驟即可開始：

1.  **直接開啟網頁**：
    *   在您的檔案總管中，前往目錄 `C:\Users\elisa\.gemini\antigravity\scratch\chinese-review-presentation`。
    *   **雙擊 `index.html`**，系統將直接在您的預設瀏覽器（推薦使用 Chrome 或 Edge）中開啟簡報。
2.  **音效開啟**：
    *   進入網頁時，預設音效已開啟。如果想在靜音環境播放，可以點選右上角的 🔊 按鈕切換。
