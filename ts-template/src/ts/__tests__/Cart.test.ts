import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add item to the card', () => {
  const cart = new Cart();
  const avengers = new Movie(1009, 'The Avengers', 0, 2012, 'США', 'Avengers Assemble!', 'Фантастика, бовик, фентази, приключения...', '137 мин. / 02:17');
  cart.add(avengers);

  expect(cart.items).toHaveLength(1);

  expect(cart.items[0]).toBe(avengers);
});

test('getter items returns copy of array', () => {
  const cart = new Cart();
  const avengers = new Movie(1009, 'The Avengers', 0, 2012, 'США', 'Avengers Assemble!', 'Фантастика, бовик, фентази, приключения...', '137 мин. / 02:17');
  cart.add(avengers);
  const result = cart.items;

  expect(Array.isArray(result)).toBe(true);

  expect(result).not.toBe(cart['_items']);

  expect(result).toEqual(cart['_items']);
});

test('sum of iteams without Discount', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(item1);
  cart.add(item2);

  expect(cart.totalCostWithoutDiscount()).toBe(2900);
});

test('sum of iteams with Discount', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(item1);
  cart.add(item2);
  const discountPercentage = 10;
  expect(cart.totalCostWithDiscount(discountPercentage)).toBe(2610);
});

test('delete iteam', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1009, 'The Avengers', 0, 2012,'США', 'Avengers Assemble!', 'Фантастика, бовик, фентази, приключения...', '137 мин. / 02:17');
  cart.add(item3);
  cart.add(item1);
  cart.add(item2);
  const id = item1.id;
  expect(cart.deleteItem(id)).toEqual(cart.items);
});
