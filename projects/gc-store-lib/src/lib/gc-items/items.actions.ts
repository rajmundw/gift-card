import { createAction, props } from '@ngrx/store';
import { ItemsState, SelectedItems, Item } from 'gc-types-lib';


export const LoadItemsAction = createAction('[LoadItems] Load Items Info');
export const LoadItemsSuccessAction = createAction('[LoadItems] Load Items Info Success', props<{ availableItems: Array<Item>}>());
export const LoadItemsFailureAction = createAction('[LoadItems] Load Items Info Failure', props<{ error: Error }>());
export const ChangeBasketContent = createAction('[ChangeBasketContent] Change Basket Content', props<{selectedItems: Array<SelectedItems>}>());
