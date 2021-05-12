import { Pie } from 'react-chartjs-2';


function Majority(props) {
  const { optionA, optionB, voteA, voteB } = props.question.fields;
  const percentageA = Math.round((voteA / (voteA + voteB) * 100))
    
  const percentageB = Math.round((voteB / (voteA + voteB) * 100))
  

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
    labels: ['A', 'B'],
    datasets: [
      {
        label: 'vote pie chart',
        data: [percentageA, percentageB],
        backgroundColor: [
          'rgb(255, 87, 33)',
          'rgb(1, 172, 181)',
        ],
      },
    ],
  };

  const option = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          let dataset = data.datasets[tooltipItem.datasetIndex];
          let currentValue = dataset.data[tooltipItem.index];
          return currentValue +  '%';
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  }

  return (
    <div>
      {determineMajority(voteA, voteB)}

      <Pie data={data} options={option}/>
      
    </div>);
}

export default Majority;
