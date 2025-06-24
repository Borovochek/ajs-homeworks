import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    public totalCostWithoutDiscount(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    public totalCostWithDiscount(discountPercentage: number): number {
        return this._items.reduce((sum, item) => {
            const discountedPrice = item.price * (1 - discountPercentage / 100);
            return sum + discountedPrice;
        }, 0);
    }

    public deleteItem(id: number): Buyable[] {
        this._items = this._items.filter(item => item.id !== id);
        return [...this._items]; 
    }
}


