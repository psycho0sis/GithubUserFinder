/* eslint-disable @typescript-eslint/no-empty-function */
import { defaultUser } from 'mock';

import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';

export const App = () => {
  return (
    <Container>
      <TheHeader />
      <Search hasError={false} onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
};
