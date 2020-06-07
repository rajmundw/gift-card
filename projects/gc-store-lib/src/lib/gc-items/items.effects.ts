import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ItemService } from 'gc-api-lib';
import { switchMapActionType } from '../rxjs/switch-map-action';

import {
    LoadItemsAction,
    LoadItemsSuccessAction,
    LoadItemsFailureAction
} from './items.actions';

@Injectable()
export class ItemsEffects {

  loadPersonalInfo$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LoadItemsAction),
    switchMapActionType(
      _ => this.itemService.loadAvailableItems$(),
      availableItems => LoadItemsSuccessAction( { availableItems } ),
      error => LoadItemsFailureAction({ error })
    )
  ));

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) { }
}
