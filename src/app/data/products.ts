export interface Product {
  id: string; name: string; category: string; size: string; price: number; mrp: number; image: string; tag?: string;
}

export const CATEGORIES = [
  { name: 'Fruits & Vegetables', icon: '🥑', color: '#e8f6e9' },
  { name: 'Dairy & Breakfast', icon: '🥛', color: '#fff2d7' },
  { name: 'Snacks & Munchies', icon: '🍿', color: '#ffebdf' },
  { name: 'Cold Drinks & Juices', icon: '🥤', color: '#e8f4ff' },
  { name: 'Bakery', icon: '🥐', color: '#fff0d4' },
  { name: 'Instant Food', icon: '🍜', color: '#ffe5e6' },
  { name: 'Personal Care', icon: '🧴', color: '#f4eaff' },
  { name: 'Household Essentials', icon: '🧹', color: '#e7f5f2' },
];

export const PRODUCTS: Product[] = [
  { id: 'banana', name: 'Robusta Bananas', category: 'Fruits & Vegetables', size: '6 pieces', price: 42, mrp: 55, image: 'photo-1571771894821-ce9b6c11b08e', tag: 'Fresh' },
  { id: 'tomato', name: 'Fresh Tomatoes', category: 'Fruits & Vegetables', size: '500 g', price: 28, mrp: 35, image: 'photo-1546094096-0df4bcaaa337' },
  { id: 'avocado', name: 'Avocado', category: 'Fruits & Vegetables', size: '2 pieces', price: 89, mrp: 110, image: 'photo-1523049673857-eb18f1d7b578' },
  { id: 'milk', name: 'Amul Taaza Milk', category: 'Dairy & Breakfast', size: '500 ml', price: 29, mrp: 31, image: 'photo-1563636619-e9143da7973b' },
  { id: 'butter', name: 'Amul Butter', category: 'Dairy & Breakfast', size: '100 g', price: 58, mrp: 62, image: 'photo-1589985270826-4b7bb135bc9d' },
  { id: 'eggs', name: 'Farm Fresh Eggs', category: 'Dairy & Breakfast', size: '6 pieces', price: 54, mrp: 65, image: 'photo-1506976785307-8732e854ad03' },
  { id: 'atta', name: 'Aashirvaad Atta', category: 'Dairy & Breakfast', size: '5 kg', price: 269, mrp: 310, image: 'photo-1627485937980-221c88ac04f9' },
  { id: 'chips', name: "Lay's Classic Chips", category: 'Snacks & Munchies', size: '50 g', price: 20, mrp: 20, image: 'photo-1566478989037-eec170784d0b', tag: 'Bestseller' },
  { id: 'coke', name: 'Coca-Cola', category: 'Cold Drinks & Juices', size: '750 ml', price: 40, mrp: 45, image: 'photo-1554866585-cd94860890b7' },
  { id: 'bread', name: 'Harvest Brown Bread', category: 'Bakery', size: '400 g', price: 45, mrp: 50, image: 'photo-1598373182133-52452f7691ef' },
  { id: 'maggi', name: 'Maggi Noodles', category: 'Instant Food', size: 'Pack of 4', price: 56, mrp: 60, image: 'photo-1612929633738-8fe44f7ec841' },
  { id: 'juice', name: 'Real Fruit Juice', category: 'Cold Drinks & Juices', size: '1 L', price: 99, mrp: 115, image: 'photo-1621506289937-a8e4df240d0b' },
  { id: 'shampoo', name: 'Daily Care Shampoo', category: 'Personal Care', size: '180 ml', price: 149, mrp: 180, image: 'photo-1608248543803-ba4f8c70ae0b' },
  { id: 'cleaner', name: 'Fresh Home Cleaner', category: 'Household Essentials', size: '500 ml', price: 89, mrp: 110, image: 'photo-1585421514738-01798e348b17' },
];

export const imageUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=480&q=80`;
