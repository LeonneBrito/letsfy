import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';

interface FooterProps {
  openModal: () => void;
}

export default function Footer({ openModal }: FooterProps) {
  return (
    <Container>
      <button type="button" onClick={openModal}>
        <FiPlus size={24} color="#FFF" />
      </button>
    </Container>
  );
}
