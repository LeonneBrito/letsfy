import { collect } from 'collect.js';
import { useEffect, useState } from 'react';

import { useFetch } from '../../services/api';
import List from '../List';
import { Container } from './styles';

export default function Board() {
  const [lists, setLists] = useState([] as unknown[]);

  const { data } = useFetch('/cards');

  useEffect(() => {
    const collection = collect(data);
    const grouped = collection.groupBy('lista');
    setLists(Object.entries(grouped.all()));
  }, [data]);

  if (!data) {
    return <Container />;
  }

  return (
    <Container>
      {lists.map((list: any) => (
        <List key={list[0]} title={list[0]} cards={list[1]} />
      ))}
    </Container>
  );
}
