import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      { path: 'product', component: ProductComponent },
      // {path:'product/:id',component:SingleProductComponent}
      { path: 'cart', component: CartComponent },
      { path: '', redirectTo: 'product' },
    ],
  },
];
@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent,
    ShoppingComponent,
    CartComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports:[]
})
export class ShoppingModule {
  constructor() {
    'Shopping Module loaded Successfully';
  }
}
