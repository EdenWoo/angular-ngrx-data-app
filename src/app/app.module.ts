import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { entityConfig } from './store/entity-metadata';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  {
    path: 'villains',
    loadChildren: 'app/villains/villains.module#VillainsModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgrxDataModule.forRoot(entityConfig)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
