import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListComponent } from './list/list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routesConfig: Routes =[
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'my/list',
    component: ListItemsComponent
    
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    HeadMenuComponent,
    FootMenuComponent,
    ListItemsComponent,
    ListComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
