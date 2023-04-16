import { Button, ButtonWrap } from './Feedback.styled';

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
