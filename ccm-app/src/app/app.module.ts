import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main/main-layout/main-layout.component'
import { MainModule } from './components/main/main.module';
import { SidebarLayoutComponent } from './components/sidebar/sidebar-layout/sidebar-layout.component'
import { CartSystemComponent } from './components/cart-system/cart-system.component'
import { NavbarComponent} from './components/shared/navbar/navbar.component'
import { FooterComponent} from './components/shared/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,MainLayoutComponent, SidebarLayoutComponent, CartSystemComponent, FooterComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
