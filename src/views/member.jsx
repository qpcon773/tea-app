import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Member() {
  const data = {
    labels: ["Red", "Blue"],
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
      </div>
    </div>
  );
}

export default Member;
