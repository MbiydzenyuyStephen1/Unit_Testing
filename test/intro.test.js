 import { describe, test, expect, it } from "vitest";
import { max } from "../src/intro";
import { fizzBuzz } from "../src/intro";
import { calculateAverage } from "../src/intro";
import { factorial } from "../src/intro";

 describe('max', () => {
   test('should return the first argument if it is greater', () => {
    // //Arrange
    // const a = 2;
    // const b = 1;
    // //Act
    // const result = max(a, b);
    // //Assert    
    // expect(result).toBe(2 );
    expect(max(2, 1)).toBe(2);
   })

   test('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
   })
});

   test('should return the first argument if values are equal', () => {
    expect(max(1, 1)).toBe(1);
});

describe('fizzBuzz', () => {
    test('should be divisible by 3 and 5',() =>{
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    test('should be divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
    test('should be divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
    test('should not be divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    })
})


describe('calculateAverage', () =>{
    test('shoould return NAN if given an empty array', () =>{
        expect(calculateAverage([])).toBe(NaN);
    })

    test('shoould calculate the average of an array with a single element', () =>{
        expect(calculateAverage([1])).toBe(1);
    })

    test('shoould calculate the average of an array with two elements', () =>{
        expect(calculateAverage([1,2])).toBe(1.5);
    })

    test('shoould calculate the average of an array with three elements', () =>{
        expect(calculateAverage([1, 2, 3])).toBe(2);
    })
})


describe('factorial', () => {
    test('should return 1 of factorial of 0', () => {
        expect(factorial(0)).toBe(1)
    })

    test('should return 1 off factorial of 1', () => {
        expect(factorial(1)).toBe(1)
    })

    test('should return 2 off factorial of 2', () => {
        expect(factorial(2)).toBe(2)
    })
    test('should return 6 off factorial of 3', () => {
        expect(factorial(3)).toBe(6)
    })
})


describe('test suite', ()  => {
    it('test case', () =>{
        const result = 'The requested file was not found';
        //Loose (too general)
        expect(result).toBe('The requested file was not found');
        //Tight (too specific)
        expect(result).toBe('The requested file was not found')
        //Better assertion
        expect(result).toMatch(/not found/i);
    })
})


describe('test suite', ()  => {
    it('test case', () =>{
        const result = [3, 2, 1];
        //Loose (too general)
        expect(result).toBeDefined();
        //Tight (too specific)
        expect(result).toEqual(expect.arrayContaining([1, 2, 3]));

        expect(result.length).toBeGreaterThan(0);
    }
)})

describe('test suite', ()  => {
    it('test case', () =>{
        const result = {name : 'SteveTech'}

        expect(result).toMatchObject( {name : 'SteveTech'});
        expect(typeof result.name).toBe('string');
    }
)})

