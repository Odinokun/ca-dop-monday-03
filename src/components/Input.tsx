import { FC } from 'react';

type PropsType = {
  newTitle: string;
  setNewTitle: (newTitle: string) => void;
};

export const Input: FC<PropsType> = ({ newTitle, setNewTitle }) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  return <input type='text' value={newTitle} onChange={inputChangeHandler} />;
};
