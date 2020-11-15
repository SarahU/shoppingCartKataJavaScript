import {Apple} from '../src/Apple';
import {Checkout} from '../src/Checkout';

// test('Hello World should return "Hello World!"', () => {
//   expect(HelloWorld()).toBe('Hello World!');
// });


test('Should have 1 apple for 50', () =>
    {
      const apple = new Apple();
      apple.setPrice(50);
      const checkout = new Checkout();
      expect(checkout.totalCost(apple)).toBe(50);
    }
)
