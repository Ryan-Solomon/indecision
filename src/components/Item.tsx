import React from 'react';
import { FC } from 'react';

interface Props {
  item: string;
}

export const Item: FC<Props> = ({ item }: Props) => {
  return <div>{item}</div>;
};

export default Item;
