import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdTableComponent } from './prod-table/prod-table.component';
import { ProdManagmentComponent } from './prod-managment.component';
import { Router, RouterModule, Routes } from '@angular/router';

const prodRoutes: Routes = [
  {
    path: '',
    component: ProdTableComponent,
  },
];

@NgModule({
  declarations: [ProdTableComponent, ProdManagmentComponent],
  imports: [CommonModule, RouterModule.forChild(prodRoutes)],
})
export class ProdManagementModule {}
