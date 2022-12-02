import React from "react";

function WorldwideScore(props) {
  return (
    <div className="world-wide-score">
      <h2>World-Wide Scores</h2>
      <table className="table">
        <tbody>
          {props.allScores.map((score, index) => (
            <tr key={index}>
              <td>{score.n.toUpperCase()}</td>
              <td className="score">{score.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorldwideScore;
