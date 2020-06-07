import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcProductsSectionComponent } from './gc-products-section/gc-products-section.component';
import { GcBasketSectionComponent } from './gc-basket/gc-basket-section.component';
import { GcBasketTotalPricePipe } from './gc-basket/gc-basket-section.component.pipe';
import { GcMainSectionComponent } from './gc-main-section/gc-main-section.component';



@NgModule({
  declarations: [
    GcProductsSectionComponent,
    GcBasketSectionComponent,
    GcBasketTotalPricePipe,
    GcMainSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GcMainSectionComponent]
})
export class GcRootModule { }
