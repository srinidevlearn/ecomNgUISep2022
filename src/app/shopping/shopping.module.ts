import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartResolver } from '../shared/service/cart.resolver';
import { CartCardComponent } from './cart/cart-card/cart-card.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        resolve: { cartItems: CartResolver },
      },
      // {path:'product/:id',component:SingleProductComponent}
      {
        path: 'cart',
        component: CartComponent,
        resolve: { cartItems: CartResolver },
      },
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
    CartCardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class ShoppingModule {
  constructor() {
    'Shopping Module loaded Successfully';
  }
}
