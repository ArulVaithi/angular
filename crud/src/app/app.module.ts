import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';


import { SiteFrameworkModule } from './products/site-framework/site-framework.module';
import { LayoutsComponent } from './products/site-framework/layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent,
    LayoutsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

