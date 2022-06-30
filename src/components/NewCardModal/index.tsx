import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useCard } from '../../hooks/useCard';
import { Container } from './styles';

Modal.setAppElement('#root');

interface INewCardModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewCardModal({ isOpen, onRequestClose }: INewCardModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createCard } = useCard();

  const resetForm = () => {
    setTitle('');
    setDescription('');
    onRequestClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createCard({ titulo: title, conteudo: description, lista: 'ToDo' });
    resetForm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => {
          resetForm();
          onRequestClose();
        }}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Novo Cartão</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </Container>
    </Modal>
  );
}
