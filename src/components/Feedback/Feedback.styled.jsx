import styled from '@emotion/styled';

export const Container = styled.div`
  border: dashed ${props => props.theme.colors.black} 1px;
  width: 400px;
  background-color: ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
`;
export const FeedbackSection = styled.div`
  h2 {
    font-size: 32px;
    text-align: center;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid ${props => props.theme.colors.black} 1px;
  background-color: ${props => props.theme.colors.bgColor};
  :active {
    background-color: ${props => props.theme.colors.white};
  }
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
  width: 75px;
  :not(:first-of-type) {
    margin-left: 16px;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 24px;
  }
`;
export const NotificationTitle = styled.h3`
  font-size: 24px;
  text-align: center;
`;
