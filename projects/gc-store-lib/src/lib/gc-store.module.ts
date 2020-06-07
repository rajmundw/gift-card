import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemsReducer } from './gc-items/items.reducer';
import { ItemsEffects } from './gc-items/items.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ main: itemsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
    EffectsModule.forRoot([
      ItemsEffects
    ])
  ],
  exports: [StoreModule, EffectsModule],
})
export class GcStoreModule { }
