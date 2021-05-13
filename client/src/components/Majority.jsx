import { Pie } from "react-chartjs-2";
import { lastWord } from "../services";

function Majority(props) {
  const { optionA, optionB, voteA, voteB } = props.question.fields;

  const percentageA = Math.round((voteA / (voteA + voteB)) * 100);
  const percentageB = Math.round((voteB / (voteA + voteB)) * 100);

  // Get last word of each option in question
  // Reference: https://stackoverflow.com/questions/20883404/javascript-returning-the-last-word-in-a-string

  const determineMajority = (a, b) => {
    const percentA = Math.round((a / (a + b)) * 100);
    const percentB = Math.round((b / (a + b)) * 100);
    if (percentA > percentB) {
      return (
        <p>
          <span
            className="majority"
            style={{ color: "#FF4304", fontWeight: "bold" }}
          >
            A: {percentA + "%"}
          </span>{" "}
          vs. B: {percentB + "%"}
        </p>
      );
    } else if (percentB > percentA) {
      return (
        <p>
          A: {percentA + "%"} vs.{" "}
          <span
            className="majority"
            style={{ color: "#01ACB5", fontWeight: "bold" }}
          >
            B: {percentB + "%"}
          </span>
        </p>
      );
    } else if (percentA === percentB) {
      return (
        <p>
          <span
            className="majority"
            style={{ color: "green", fontWeight: "bold" }}
          >
            A: {percentA + "%"} vs. B: {percentB + "%"}
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
      {determineMajority(voteA, voteB)}
      {/* Source: React Chart.js */}
      <Pie data={data} options={option} />
    </div>
  );
}

export default Majority;
