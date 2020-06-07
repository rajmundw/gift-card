export interface Item {
    id: number;
    title: string;
    cover: string;
    availability: boolean;
    price: number;
}

export interface SelectedItems {
  id: number;
  quantity: number;
}

export interface BasketModel extends Item {
  quantity: number;
}

export interface ItemsState {
  availableItems: Array<Item>;
  selectedItems: Array<SelectedItems>;
}