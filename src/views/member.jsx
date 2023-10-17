import "styles/member.scss"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Member() {
  const data = {
    labels: ["use", "none"],
    datasets: [
      {
        data: [941, 559],
        backgroundColor: [
          "#42602E",
          "#DEECDD",
        ],
        borderWidth: 0
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
    },
  };

  const listData = [
    {
      url: require("imgs/icon/gear.svg").default,
      name: "管理設定",
      showSocialBtn: false,
      id: 0,
    },
    {
      url: require("imgs/icon/discount-voucher.svg").default,
      name: "優惠券",
      showSocialBtn: false,
      id: 1,
    },
    {
      url: require("imgs/icon/shopping-cart.svg").default,
      name: "訂單情況",
      showSocialBtn: false,
      id: 2,
    },
    {
      url: require("imgs/icon/soda.svg").default,
      name: "外送情況",
      showSocialBtn: false,
      id: 3,
    },
    {
      url: require("imgs/icon/coin.svg").default,
      name: "交易紀錄",
      showSocialBtn: false,
      id: 4,
    },
    {
      url: require("imgs/icon/location-pin.svg").default,
      name: "門市資訊",
      showSocialBtn: false,
      id: 5,
    },
    {
      url: require("imgs/icon/conical-flask.svg").default,
      name: "關於我們",
      showSocialBtn: true,
      id: 6,
    },
  ]
  return (
    <div className="contentBox member">
      <div className="pieBox">
        <Pie data={data} options={options} />
        <div className="pieInfo">
          <p><img src={require("imgs/icon/conical-flask.svg").default} alt="" />新手茶友</p>
          <p>消費里程數<span>941</span></p>
          <p>下一門檻<b> / 1500</b></p>
        </div>
      </div>
      <ul className="functionList">
        <li className="user">
          <div className="info">
            <div className="userImg">
              <img src={require("imgs/all/gl626937.jpg")} alt="" />
            </div>
            <p>
                基本資料 （編輯獲得優惠券）
                <span>使用者 xxxxxxxxxx@gmail.com</span>
              </p>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault() }}>
            <img src={require("imgs/icon/next.svg").default} alt="" />
          </a>
        </li>
        {
          listData.map((item) => {
            return (
              <li key={item.id}>
                <a href="#" onClick={(e) => { e.preventDefault() }}>
                  <img src={item.url} alt="" />
                  {item.name}
                </a>
                <div className={`socialBox${item.showSocialBtn? '':' dNone'}`}>
                  <a href="#" onClick={(e) => { e.preventDefault() }}>
                  <img src={require("imgs/icon/facebook.svg").default} alt="" />
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault() }}>
                  <img src={require("imgs/icon/instagram.svg").default} alt="" />
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Member;
