import { Pie } from "react-chartjs-2";
import { lastWord } from "../services";

function Majority(props) {
  const { optionA, optionB, voteA, voteB } = props.question.fields;

  const percentageA = Math.round((voteA / (voteA + voteB)) * 100);
  const percentageB = Math.round((voteB / (voteA + voteB)) * 100);

  // Get last word of each option in question
  // Reference: https://stackoverflow.com/questions/20883404/javascript-returning-the-last-word-in-a-string

  const determineMajority = (a, b) => {
    if (voteA > voteB) {
      return (
        <p>
          <span
            className="majority"
            style={{ color: "#FF4304", fontWeight: "bold" }}
          >
            {voteA}
          </span>{" "}
          vs.{voteB}
        </p>
      );
    } else if (voteB > voteA) {
      return (
        <p>
          {voteA} vs.{" "}
          <span
            className="majority"
            style={{ color: "#01ACB5", fontWeight: "bold" }}
          >
          {voteB}
          </span>
        </p>
      );
    } else if (voteA === voteB) {
      return (
        <p>
          <span
            className="majority"
            style={{ color: "green", fontWeight: "bold" }}
          >
            {voteA} vs.  {voteB}
          </span>
        </p>
      );
    } else {
      return (
        <p>
          <em>New Question Added!</em>
        </p>
      );
    }
  };
 
  const data = {
    labels: [lastWord(optionA), lastWord(optionB)],
    datasets: [
      {
        data: [percentageA, percentageB],
        backgroundColor: ["rgb(255, 87, 33)", "rgb(1, 172, 181)"],
        labelSuffix: "%",
      },
    ],
  };

  const option = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem, data) => {
            const { formattedValue, label } = tooltipItem;

            return `${label}: ${formattedValue}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      {/* Source: React Chart.js */}
      <Pie data={data} options={option} />
      {determineMajority(voteA, voteB)}
    </div>
  );
}

export default Majority;
