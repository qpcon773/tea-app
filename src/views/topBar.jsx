import "styles/topBar.scss";

import { useLocation } from "react-router-dom";
import { useMemo, useRef, memo } from "react";

const TopBar = () => {
  useMemo(() => {}, [useLocation()])

  const title = useRef("會員專區")

  switch (useLocation().pathname) {
    case "/":
      title.current = "會員專區"
      break 
    case "/shop":
      title.current = "線上購物"
      break 
    case "/event":
      title.current = "活動資訊"
      break 
    default:
      break
  }

  return (
    <div className="topBar">
      <p className="title">{title.current}</p>
    </div>
  );
}

export default TopBar;
