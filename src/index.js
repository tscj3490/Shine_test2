/**
 * Specifications:
 *   When the value of the radio button is text
 *   display as shown in result1.png
 *   otherwise, display as shown in result2.png
 * Note:
 *   1. please reference style_guide.jpg for design template (can use styled-component)
 *   2. You can change the file structure, names and content to plan the components structure
 *   3. You do not need to implement search or reset functions
 *
 * 完成需求：
 *    當 Radio button 的值是 Text 時，
 *    會顯示 result1.png
 *    否則顯示 result2.png
 * 備註：
 * 1. 請參考 style_guide.jpg 設計樣式 (可使用 styled-component)
 * 2. 可自行變更資料夾檔案名稱或內容，規劃 component 結構
 * 3. 不需要實作 Search 和 Reset 按鈕的行為
 */
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import SettingPanel from "./components/SettingPanel";


function App() {
  return (
    <SettingPanel/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
