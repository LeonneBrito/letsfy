import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ICard } from '../@types';
import { api, useFetch } from '../services/api';

type ICardInput = Omit<ICard, 'id'>;

interface CardsProviderProps {
  children: ReactNode;
}

interface CardsContextData {
  cards: ICard[];
  createCard: (card: ICardInput) => Promise<void>;
  editCard: (cardId: string, card: ICardInput) => Promise<void>;
  deleteCard: (cardId: string) => Promise<void>;
}

const CardsContext = createContext<CardsContextData>({} as CardsContextData);

export function CardsProvider({ children }: CardsProviderProps) {
  const [cards, setCards] = useState<ICard[]>([]);

  const { data } = useFetch('/cards');

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);

  async function createCard(card: ICardInput): Promise<void> {
    try {
      const response = await api.post('/cards', {
        ...card,
        lista: 'ToDo',
      });

      setCards([...cards, response.data]);
      toast.success('Cartão criado com sucesso!');
    } catch (err) {
      toast.error('Erro ao criar cartão');
    }
  }

  async function editCard(cardId: string, card: ICardInput): Promise<void> {
    try {
      await api.put(`/cards/${cardId}`, {
        ...card,
        id: cardId,
      });

      const newCards = cards.map((item) =>
        item.id === cardId ? { ...item, ...card } : item,
      );
      setCards(newCards);
      toast.success('Cartão editado com sucesso!');
    } catch (err) {
      toast.error('Erro ao editar cartão');
    }
  }

  async function deleteCard(cardId: string): Promise<void> {
    try {
      await api.delete(`/cards/${cardId}`);

      const newCards = cards.filter((item) => item.id !== cardId);
      setCards(newCards);
      toast.success('Cartão deletado com sucesso!');
    } catch (err) {
      toast.error('Erro ao deletar cartão');
    }
  }

  return (
    <CardsContext.Provider value={{ cards, createCard, editCard, deleteCard }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardsContext);
  return context;
}
