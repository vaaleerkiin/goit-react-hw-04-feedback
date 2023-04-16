import { Containers } from 'components/Containers/Container';
import { Wrap } from 'components/App/App.styled';
import { Feedback } from 'components/Feedback/Feedback';
export const App = () => {
  return (
    <Wrap>
      <Containers>
        <Feedback />
      </Containers>
    </Wrap>
  );
};
