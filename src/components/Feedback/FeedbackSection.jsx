import { FeedbackSection } from './Feedback.styled';
export const Section = ({ children, title }) => (
  <FeedbackSection>
    {title && <h2>{title}</h2>}
    {children}
  </FeedbackSection>
);
