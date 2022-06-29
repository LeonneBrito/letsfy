import { collect } from 'collect.js';
import { useEffect, useState } from 'react';

import { ICard } from '../../@types';
import { useFetch } from '../../services/api';
import List from '../List';
import { Container } from './styles';

export default function Board() {
  const [listTodo, setListTodo] = useState([] as ICard[]);
  const [listDoing, setListDoing] = useState([] as ICard[]);
  const [listDone, setListDone] = useState([] as ICard[]);

  const { data } = useFetch('/cards');

  useEffect(() => {
    const collection = collect<ICard>(data);
    const filteredTodos = collection.filter((item) => item.lista === 'ToDo');
    const filteredDoings = collection.filter((item) => item.lista === 'Doing');
    const filteredDones = collection.filter((item) => item.lista === 'Done');

    setListTodo(filteredTodos.all());
    setListDoing(filteredDoings.all());
    setListDone(filteredDones.all());
  }, [data]);

  if (!data) {
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
