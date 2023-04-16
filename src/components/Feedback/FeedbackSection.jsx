import { FeedbackSection } from './Feedback.styled';
import PropTypes from 'prop-types';
export const Section = ({ children, title }) => (
  <FeedbackSection>
    {title && <h2>{title}</h2>}
    {children}
  </FeedbackSection>
);
Section.propTypes = {
  title: PropTypes.string,
};
