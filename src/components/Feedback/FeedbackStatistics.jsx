import { List } from './Feedback.styled';
import { Notification } from './Notification';
import PropTypes from 'prop-types';
export const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    {total ? (
      <List>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>total: {total}</li>
        <li>positive feedback: {positivePercentage}%</li>
      </List>
    ) : (
      <Notification title={'There is no feedback'} />
    )}
  </>
);
FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
