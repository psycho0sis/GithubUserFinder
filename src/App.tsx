import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';

export const App = () => {
  return (
    <Container>
      <TheHeader />
      <Search hasError={false} onSubmit={() => {}} />
    </Container>
  );
};
