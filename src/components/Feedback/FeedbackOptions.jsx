import { Button, ButtonWrap } from './Feedback.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onClick }) => (
  <ButtonWrap>
    {options &&
      options.map(el => (
        <Button key={el} onClick={onClick} value={el}>
          {el}
        </Button>
      ))}
  </ButtonWrap>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
