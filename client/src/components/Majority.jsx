import { Pie } from 'react-chartjs-2';


function Majority(props) {
  const { optionA, optionB, voteA, voteB } = props.question.fields;

  const determineMajority = (a, b) => {
    const percentA = Math.round((a / (a + b)) * 100);
    const percentB = Math.round((b / (a + b)) * 100);

    if (percentA > percentB) {
      // console.log(percentA + "%");
      return (
        <p>
          <span
            className="majority"
            style={{ color: "green", fontWeight: "bold" }}
          >
            A: {percentA + "%"}
          </span>{" "}
          vs. B: {percentB + "%"}
        </p>
      );
    } else if (percentB > percentA) {
      // console.log(percentB + "%");
      return (
        <p>
          A: {percentA + "%"} vs.{" "}
          <span
            className="majority"
            style={{ color: "green", fontWeight: "bold" }}
          >
            B: {percentB + "%"}
          </span>
        </p>
      );
    } else if (percentA === percentB){
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
        <p><em>New Question Added!</em></p>
      )
    }
  };

  const data = {
    labels: ["A", "B"],
    datasets: [
      {
        data:[voteA, voteB]
      }
    ]
  }


  return (
    <div>
      {determineMajority(voteA, voteB)}
      <canvas id="pieChart">
        <Pie />
      </canvas>
    </div>);
}

export default Majority;
