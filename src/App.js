import React from "react";
import "./App.css";
import { useState } from "react";
import WorldwideScore from "./WorldwideScore";

function App(props) {
  const [data, setData] = useState(props.allScores);
  const [toggle, setToggle] = useState(false);

  let scoresArray = [];
  scoresArray = props.allScores
    .map((el) => scoresArray.concat(el.scores))
    .flat(1);
  const [worldwideScore, setWorldwideScore] = useState(scoresArray);

  function handleClick() {
    setToggle(!toggle);
    setData((data) => {
      const sortedData = toggle
        ? data.map((el) => {
            const descen = el.scores.sort((a, b) => b.s - a.s);
            return { name: el.name, scores: descen };
          })
        : data.map((el) => {
            const ascen = el.scores.sort((a, b) => a.s - b.s);
            return { name: el.name, scores: ascen };
          });
      return sortedData;
    });
    setWorldwideScore(
      toggle
        ? worldwideScore.sort((a, b) => b.s - a.s)
        : worldwideScore.sort((a, b) => a.s - b.s)
    );
  }

  return (
    <div className="scoreTable">
      <div>
        <button onClick={() => handleClick()}>
          {toggle ? "Sort in Descending" : "Sort in Ascending"}
        </button>
      </div>
      <h2>High Scores per Country</h2>
      {data.map((country, index) => (
        <div key={index} className="countryScore">
          <h4>HIGH SCORES : {country.name}</h4>
          <table className="table">
            <tbody>
              {country.scores.map((score, index) => (
                <tr key={index}>
                  <td>{score.n.toUpperCase()}</td>
                  <td className="score">{score.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      ;
      <WorldwideScore allScores={worldwideScore} />
    </div>
  );
}

export default App;
