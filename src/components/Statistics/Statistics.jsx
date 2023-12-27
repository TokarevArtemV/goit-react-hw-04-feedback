import css from './Statistics.module.css';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={`${css.statistics}`}>
      <Notification countTotalFeedback={total}>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {`${total}`}</span>
        <span>Positive feedback: {`${positivePercentage} %`}</span>
      </Notification>
    </div>
  );
};
