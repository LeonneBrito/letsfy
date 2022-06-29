import React from 'react';

import { IList } from '../../@types';
import Card from '../Card';
import { Container } from './styles';

export default function List({ title, cards }: IList) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
      </header>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </Container>
  );
}
