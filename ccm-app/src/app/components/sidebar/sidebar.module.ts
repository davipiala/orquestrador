import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';



@NgModule({
  declarations: [SidebarLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SidebarModule { }
