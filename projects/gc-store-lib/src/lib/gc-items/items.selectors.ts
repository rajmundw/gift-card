import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const settingsFeatureSelector: MemoizedSelector<object, any> = createFeatureSelector<any>('main');
export const availableItemsSelector: MemoizedSelector<object, any> = createSelector(settingsFeatureSelector,
    ({ availableItems }) => {
        return availableItems;
    });
export const selectedItemsSelector: MemoizedSelector<object, any> = createSelector(settingsFeatureSelector,
    ({ selectedItems }) => {
        return selectedItems;
    });
export const cardsInBasketSelector: MemoizedSelector<object, any> = createSelector(
    selectedItemsSelector,
    availableItemsSelector,
    (selectedItems, availableItemsSelector ) => {
        return  selectedItems &&
                selectedItems.map(
                    selectedItem => {
                        return {...availableItemsSelector.find(
                                availableItem => availableItem.id === selectedItem.id), quantity: selectedItem.quantity
                            };
                    }
                );
    });
