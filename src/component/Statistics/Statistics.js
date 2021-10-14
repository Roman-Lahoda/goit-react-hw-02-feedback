import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={s.good}>Good: {good}</p>
      <p className={s.neutral}>Neutral: {neutral}</p>
      <p className={s.bad}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.positive}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
