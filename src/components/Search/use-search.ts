import { useAppDispatch } from 'redux-hooks';

import { fetchUser } from 'features/AsyncUser/async-user-action';

type FormField = {
  username: HTMLInputElement;
};

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormField>) => {
    event.preventDefault();

    const text = event.currentTarget.username.value;

    if (text.trim()) {
      dispatch(fetchUser(text));
    }

    event.currentTarget.reset();
  };

  return handleSubmit;
};
