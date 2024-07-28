import React from 'react';

import { fetchCollection } from '../lib/collection';

import './Collection.css';
import { CardItem } from '../components/CardItem/CardItem';

export const Collection = () => {
  const collection = fetchCollection();
  const card = collection[0];

  /**
   * Step 1: Render the card
   */
  return <CardItem data={card} />;
};
