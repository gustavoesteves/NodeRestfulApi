import {
    absolute,
    greet,
    getCountries,
    getProduct,
    getUser
} from "../course/01 - Functions to be tested/tobetested";
import { fizzBuzz } from "../course/01 - Functions to be tested/fizzBuzz";

describe('absolute', () => {
    it('should be returned positive number if positive param', () => {
        const result = absolute(1);
        expect(result).toBe(1);
    });

    it('should be returned positive number if negative param', () => {
        const result = absolute(-1);
        expect(result).toBe(1);
    });

    it('should be returned zero if zero param', () => {
        const result = absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return message', () => {
        const result = greet('test');
        expect(result).toMatch(/test/);
    });
});

describe('getCountries', () => {
    it('should returned supported Countries', () => {
        const result = getCountries();
        expect(result).toEqual(expect.arrayContaining(['CAD', 'USA', 'BRA']));
    });
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = getProduct(1);
        // if are exactly same properties 
        // expect(result).toEqual({ id: 1, product: 'Bubble blast' });

        // if the properties contained in the object
        expect(result).toMatchObject({ id: 1, product: 'Bubble blast' });

        // or we can validate each property
        expect(result).toHaveProperty('id', 1);
    });
});

describe('getUser', () => {
    it('should throw if username is empty', () => {
        /**
         * first we need to test if username is:
         * null, undefined, ''
         * To test a throw exception, our function needs to set 
         * on the callback function of expect
         */
        const args = [null, undefined, ''];
        args.forEach(item => {
            expect(() => {
                getUser(item);
            }).toThrow();
        });

    });
});

describe('fizzBuzz', () => {
    it('should be a valid number input', () => {
        const args = [null, undefined];
        args.forEach(item => {
            expect(() => {
                fizzBuzz(item);
            }).toThrow();
        });
    });

    it('should be divisible by 3 and 5', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('should be divisible by 3', () => {
        const result = fizzBuzz(9);
        expect(result).toBe('Fizz');
    });

    it('should be divisible by 5', () => {
        const result = fizzBuzz(10);
        expect(result).toBe('Buzz');
    });

    it('should be neither divisible by 3 or 5', () => {
        const result = fizzBuzz(11);
        expect(result).toBe(11);
    });
});