import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../data/products';

export interface CartItem { product: Product; quantity: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly storageKey = 'swiftbasket-cart';
  readonly items = signal<CartItem[]>(this.restore());
  readonly count = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));
  readonly subtotal = computed(() => this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0));
  readonly delivery = computed(() => this.subtotal() >= 299 || this.subtotal() === 0 ? 0 : 25);
  readonly total = computed(() => this.subtotal() + this.delivery());

  add(product: Product) { this.change(product, 1); }
  setQuantity(product: Product, quantity: number) {
    this.items.update(items => quantity <= 0 ? items.filter(item => item.product.id !== product.id) : items.map(item => item.product.id === product.id ? { ...item, quantity } : item));
    this.persist();
  }
  quantity(id: string) { return this.items().find(item => item.product.id === id)?.quantity ?? 0; }
  clear() { this.items.set([]); this.persist(); }
  private change(product: Product, amount: number) {
    this.items.update(items => {
      const found = items.find(item => item.product.id === product.id);
      return found ? items.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + amount } : item) : [...items, { product, quantity: amount }];
    });
    this.persist();
  }
  private persist() { try { localStorage.setItem(this.storageKey, JSON.stringify(this.items())); } catch { /* storage may be unavailable */ } }
  private restore(): CartItem[] {
    try { const saved = JSON.parse(localStorage.getItem(this.storageKey) || '[]') as CartItem[]; return Array.isArray(saved) ? saved.filter(item => item?.product?.id && item.quantity > 0) : []; } catch { return []; }
  }
}
