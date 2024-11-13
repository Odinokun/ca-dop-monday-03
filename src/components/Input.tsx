import { FC, MutableRefObject } from 'react';

type PropsType = {
  newTitleRef: MutableRefObject<HTMLInputElement | null>;
};

export const Input: FC<PropsType> = ({ newTitleRef }) => {
  return <input type='text' ref={newTitleRef} />;
};
