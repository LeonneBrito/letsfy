import React from 'react';

import Card from '../Card';

import { Container } from './styles';

interface ListProps {
  title: string;
}

export default function List({ title }: ListProps) {
  return (
    <Container>
      <header>
        <h2>{ title }</h2>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  )
}