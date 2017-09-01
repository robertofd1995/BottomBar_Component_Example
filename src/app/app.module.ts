import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { BottomBarModule } from 'bottombar-component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


export const appRoutes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2',      component: Test2Component },
  { path: '',
    redirectTo: '/test1',
    pathMatch: 'full'
  },
  { path: '**', component: Test2Component }
];



@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    BottomBarModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
