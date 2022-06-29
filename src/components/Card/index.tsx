import 'react-edit-text/dist/index.css';

import React, { useEffect, useState } from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit,
  FiSave,
  FiTrash,
  FiXCircle,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

import { ICard } from '../../@types';
import { useCard } from '../../hooks/useCard';
import { Container, Label } from './styles';

export default function Card({ conteudo, id, lista, titulo }: ICard) {
  const [color, setColor] = useState('');
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(titulo);
  const [content, setContent] = useState(conteudo);
  const [step, setStep] = useState(0);

  const list = ['ToDo', 'Doing', 'Done'];

  const { editCard, deleteCard } = useCard();

  useEffect(() => {
    switch (lista) {
      case 'ToDo':
        setColor('#FF669D');
        setStep(0);
        break;
      case 'Doing':
        setColor('#FFD666');
        setStep(1);
        break;
      case 'Done':
        setColor('#37C77F');
        setStep(2);
        break;
      default:
        break;
    }
  }, []);

  const incrementStep = async () => {
    if (step < 2) {
      setStep(step + 1);
    }
    await editCard(id, { titulo, conteudo, lista: list[step + 1] });
  };

  const decrementStep = async () => {
    if (step > 0) {
      setStep(step - 1);
    }
    await editCard(id, { titulo, conteudo, lista: list[step - 1] });
  };

  const handleSave = async () => {
    if (title.length === 0) {
      toast.error('Título não pode ser vazio');
      return;
    }

    if (content.length === 0) {
      toast.error('Conteúdo não pode ser vazio');
      return;
    }

    await editCard(id, { titulo: title, conteudo: content, lista });
    setEdit(false);
  };

  const handleDelete = async () => {
    await deleteCard(id);
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
          <FiEdit size={18} onClick={() => setEdit(true)} className="edit-button" />
          <h4>{titulo}</h4>
          <p>{conteudo}</p>
          <footer>
            {lista !== 'ToDo' && <FiArrowLeft size={18} onClick={decrementStep} />}
            <FiTrash size={18} onClick={handleDelete} />
            {lista !== 'Done' && <FiArrowRight size={18} onClick={incrementStep} />}
          </footer>
        </React.Fragment>
      )}
    </Container>
  );
}
