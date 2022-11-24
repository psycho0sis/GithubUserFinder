import { Provider } from 'react-redux';

import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCardWrapper } from 'components/UserCardWrapper';

import { store } from './store';

export const App = () => (
  <Provider store={store}>
    <Container>
      <TheHeader />
      <Search />
      <UserCardWrapper />
    </Container>
  </Provider>
);
