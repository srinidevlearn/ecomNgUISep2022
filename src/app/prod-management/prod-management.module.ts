import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdTableComponent } from './prod-table/prod-table.component';
import { ProdManagmentComponent } from './prod-managment.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProdSearchPipe } from './pipes/prod-search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { ShoppingModule } from '../shopping/shopping.module';
const prodRoutes: Routes = [
  {
    path: '',
    component: ProdTableComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [
    ProdTableComponent,
    ProdManagmentComponent,
    ProdSearchPipe,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    FormsModule,
    ReactiveFormsModule,
    HotToastModule.forRoot({
      reverseOrder: false,
        position: 'bottom-right',
      
    }),
    SharedModule,
  ],
})
export class ProdManagementModule {}
