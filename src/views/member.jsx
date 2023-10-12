import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "styles/member.scss"

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
  return (
    <div className="contentBox">
      <div className="pieBox">
        <Pie data={data} options={options}/>
        <div className="pieInfo">
          <p><img src="imgs/icon/discount-voucher.svg" alt="" />新手茶友</p>
          <p>消費里程數<span>941</span></p>
          <p>下一門檻 / 1500</p>
        </div>
      </div>
    </div>
  );
}

export default Member;
