import { Component } from 'react';
import { Container } from './Feedback.styled';
import { Section } from './FeedbackSection';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = el => {
    const value = el.currentTarget.value;
    this.setState(prevState => {
      return { ...prevState, [value]: prevState[value] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.ceil((good / this.countTotalFeedback()) * 1000) / 10;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onClick={this.handleClick}
          />
        </Section>
        <Section title={'Statistic'}>
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
