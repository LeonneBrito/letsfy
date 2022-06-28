import React from 'react';
import { FiEdit2, FiTrash } from 'react-icons/fi';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#37C77F" />
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <footer>
        <FiEdit2 size={20} />
        <FiTrash size={20} />
      </footer>
    </Container>
  );
}