import "../styles/bottomBar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const [barData, setBarData] = useState([
    {
      name: "活動資訊",
      url: require("../imgs/icon/discount-voucher.svg"),
      focusUrl: require("../imgs/icon/discount-voucher_g.svg"),
      id: 0,
      isFocus: false,
    },
    {
      name: "茶餘誌",
      url: require("../imgs/icon/agenda.svg"),
      focusUrl: require("../imgs/icon/agenda_g.svg"),
      id: 1,
      isFocus: false,
    },
    {
      name: "會員卡",
      url: require("../imgs/icon/conical-flask.svg"),
      focusUrl: require("../imgs/icon/conical-flask_g.svg"),
      id: 2,
      isFocus: false,
    },
    {
      name: "線上購物",
      url: require("../imgs/icon/shopping-cart.svg"),
      focusUrl: require("../imgs/icon/shopping-cart_g.svg"),
      id: 3,
      isFocus: false,
    },
    {
      name: "會員專區",
      url: require("../imgs/icon/profile-user.svg"),
      focusUrl: require("../imgs/icon/profile-user_g.svg"),
      id: 4,
      isFocus: true,
    },
  ]);
  const navigate = useNavigate()

  const clickEvent = (id)=>{

    navigate('/3257')

    const res = barData.map((item)=>{
        item.isFocus = Boolean(item.id === id)
        return item
    })
    setBarData(res)
  }

  return (
    <ul className="bottomBar">
      {barData.map((item) => {
        return (
          <li className={item.isFocus ? "focus" : null} key={item.id}>
            <a href="#" onClick={()=>{
                clickEvent(item.id)
            }}>
              <img
                src={item.isFocus ? item.url.default : item.focusUrl.default}
                alt=""
              />
              {item.name}
            </a>
          </li>
        );
      })}
      
    </ul>
  );
};

export default BottomBar;
