import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GcRootModule } from 'projects/gc-sections-lib/src/public_api';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { GcStoreModule } from 'projects/gc-store-lib/src/lib/gc-store.module';
import { GcMainSectionComponent } from './gc-main-section/gc-main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    GcMainSectionComponent
  ],
  imports: [
    GcRootModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    GcStoreModule
  ],
exports: [
  RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
