import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.feedback__btns}>
      {options.map((option) => {
        return (
          <button
            key={option}
            className={`${s.btn} ${option}`}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
