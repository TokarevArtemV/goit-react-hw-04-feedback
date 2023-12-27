import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={`${css.container}`}>
      {options.map(option => {
        return (
          <button
            key={option}
            data-state={option}
            className={`${css.button}`}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
