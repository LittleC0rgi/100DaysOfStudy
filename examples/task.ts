interface Item {
  name: string;
  price: number;
}

interface Items {
  item: Item;
  count: number;
}

class Cart {
  items: Items[] = [];

  addItem(item: Item, count: number = 1) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return this.items.reduce(
      (acc, item) => acc + item.item.price * item.count,
      0
    );
  }

  getCount() {
    return this.items.reduce((acc, item) => acc + item.count, 0);
  }
}
