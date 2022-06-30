import { collect } from 'collect.js';
import { useEffect, useState } from 'react';

import { ICard } from '../../@types';
import { useCard } from '../../hooks/useCard';
import List from '../List';
import { Container } from './styles';

export default function Board() {
  const [listTodo, setListTodo] = useState([] as ICard[]);
  const [listDoing, setListDoing] = useState([] as ICard[]);
  const [listDone, setListDone] = useState([] as ICard[]);

  const { cards } = useCard();

  useEffect(() => {
    const collection = collect<ICard>(cards);
    const filteredTodos = collection.filter((item) => item.lista === 'ToDo');
    const filteredDoings = collection.filter((item) => item.lista === 'Doing');
    const filteredDones = collection.filter((item) => item.lista === 'Done');

    setListTodo(filteredTodos.all());
    setListDoing(filteredDoings.all());
    setListDone(filteredDones.all());
  }, [cards]);

  if (!cards) {
    return <Container />;
  }

  return (
    <Container>
      <List title="ToDo" cards={listTodo} />
      <List title="Doing" cards={listDoing} />
      <List title="Done" cards={listDone} />
    </Container>
  );
}
