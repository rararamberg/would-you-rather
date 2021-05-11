function PieGraph(props) {
  const { voteA, voteB } = props.question.fields;

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
    } else {
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
    }
  };
  return <div>{determineMajority(voteA, voteB)}</div>;
}

export default PieGraph;
