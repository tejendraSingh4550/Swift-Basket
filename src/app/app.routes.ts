import { Routes } from '@angular/router';
import { CartPage, CatalogPage, CheckoutPage, HomePage, OrderSuccessPage } from './app';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'products', component: CatalogPage },
  { path: 'category/:category', component: CatalogPage },
  { path: 'cart', component: CartPage },
  { path: 'checkout', component: CheckoutPage },
  { path: 'order-success', component: OrderSuccessPage },
  { path: '**', redirectTo: '' },
];
