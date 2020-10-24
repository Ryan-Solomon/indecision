import React, { FC } from 'react';
import Item from './Item';

interface Props {
  items: string[];
}

const Items: FC<Props> = ({ items }: Props) => {
  const renderedItems = items.map((item, idx) => {
    return <Item key={item + idx} item={item} />;
  });

  return <div>{renderedItems}</div>;
};

export default Items;
