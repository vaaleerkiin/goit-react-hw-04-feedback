import React, { useEffect, useState } from 'react';
import { Container } from './Feedback.styled';
import { Section } from './FeedbackSection';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics';
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleClick = el => {
    const value = el.currentTarget.value;
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [bad, good, neutral]);

  useEffect(() => {
    setPositivePercentage(Math.ceil((good / total) * 1000) / 10);
  }, [good, total]);

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={handleClick}
        />
      </Section>
      <Section title={'Statistic'}>
        <FeedbackStatistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </Container>
  );
};
