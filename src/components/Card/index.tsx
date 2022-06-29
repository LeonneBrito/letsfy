import 'react-edit-text/dist/index.css';

import React, { useEffect, useState } from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import { FiEdit2, FiSave, FiTrash, FiXCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { ICard } from '../../@types';
import { api } from '../../services/api';
import { Container, Label } from './styles';

export default function Card({ conteudo, id, lista, titulo }: ICard) {
  const [color, setColor] = useState('');
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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

  const handleSave = async () => {
    if (title.length === 0) {
      toast.error('Título não pode ser vazio');
      return;
    }

    if (content.length === 0) {
      toast.error('Conteúdo não pode ser vazio');
      return;
    }

    try {
      await api.put(`cards/${id}`, {
        id: id,
        titulo: title,
        conteudo: content,
        lista: lista,
      });

      setEdit(false);
      toast.success('Cartão atualizado com sucesso');
    } catch (err) {
      toast.error('Erro ao salvar');
    }
  };

  const handleDelete = async () => {
    await api.delete(`/cards/${id}`);
    toast.success('Cartão deletado com sucesso!');
  };

  return (
    <Container done={lista === 'Done' ? true : false}>
      {edit ? (
        <React.Fragment>
          <header>
            <Label color={color} />
          </header>
          <EditText
            className="edit-title"
            inputClassName="edit-title"
            defaultValue={titulo}
            onSave={(e) => setTitle(e.value)}
          />
          <EditTextarea
            className="edit-content"
            inputClassName="edit-content"
            defaultValue={conteudo}
            onSave={(e) => setContent(e.value)}
          />
          <footer>
            <FiSave size={18} onClick={handleSave} />
            <FiXCircle size={18} onClick={() => setEdit(false)} />
          </footer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <header>
            <Label color={color} />
          </header>
          <h4>{titulo}</h4>
          <p>{conteudo}</p>
          <footer>
            <FiEdit2 size={18} onClick={() => setEdit(true)} />
            <FiTrash size={18} onClick={handleDelete} />
          </footer>
        </React.Fragment>
      )}
    </Container>
  );
}
