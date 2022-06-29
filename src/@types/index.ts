export interface ICard {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

export interface IList {
  title: string;
  cards: ICard[];
}
