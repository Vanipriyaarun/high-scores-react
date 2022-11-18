import React from "react";
import "./App.css";


function App(props) {
  return (
    <div className="scoreTable">
      <h2>High Scores per Country</h2>
      {props.allScores.map((country,index) =>(
        <div key={index} className="countryScore">
          <h4>HIGH SCORES : {country.name}</h4>
          <table className="table">
            {/* <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead> */}
            <tbody>
              {country.scores.map((score,index)=>(
                <tr  key={index}>
                  <td>{score.n}</td>
                  <td>{score.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))};
    </div>
  );
}

export default App;
