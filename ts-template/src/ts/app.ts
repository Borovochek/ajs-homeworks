import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'The Avengers', 0, 2012,'США', 'Avengers Assemble!', 'Фантастика, бовик, фентази, приключения...', '137 мин. / 02:17'));
console.log(cart.items);

console.log(cart.totalCostWithoutDiscount());

console.log(cart.totalCostWithDiscount(10));

console.log(cart.deleteItem(1008));
