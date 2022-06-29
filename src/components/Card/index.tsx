import { useEffect, useState } from 'react';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { ICard } from '../../@types';
import { api } from '../../services/api';
import { Container, Label } from './styles';

export default function Card({ conteudo, id, lista, titulo }: ICard) {
  const [color, setColor] = useState('');

  useEffect(() => {
    switch (lista) {
      case 'ToDo':
        setColor('#FF669D');
        break;
      case 'Doing':
        setColor('#FFD666');
        break;
      case 'Done':
        setColor('#37C77F');
        break;
      default:
        break;
    }
  }, []);

  const handleDelete = async () => {
    await api.delete(`/cards/${id}`);
    toast.success('Cartão deletado com sucesso!');
  };

  return (
    <Container>
      <header>
        <Label color={color} />
      </header>
      <h4
        style={{
          textDecoration: lista === 'Done' ? 'line-through' : 'none',
        }}
      >
        {titulo}
      </h4>
      <p>{conteudo}</p>
      <footer>
        <FiEdit2 size={18} />
        <FiTrash size={18} onClick={handleDelete} />
      </footer>
    </Container>
  );
}
