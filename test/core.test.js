import { it, expect, describe, beforeAll, beforeAll, afterEach, afterAll, beforeEach} from 'vitest'
import { getCoupons } from "../src/intro"; 
import { calculateDiscount, canDrive, fetchData } from "../src/core"
import { validateUserInput } from '../src/core';
import { canDrive } from '../src/core';
import { isPriceInRange } from '../src/core';
import { Stack } from '../src/core';

describe('test suit', () => {
    it('test case', () => {
        const result = { name: 'SteveTech' };
        expect(result).toEqual({ name: 'SteveTech'  })
    })
})


describe('getCoupons', ()  => {

    it('should return an array of coupons'), () => {
        const coupons = getCoupons();
        expect(Array.isArray(coupons)).toBe(true);
    }

    it('should return and array with discount of type number'), () => {
        const coupons = getCoupons();
        expect(typeof coupons.discount).toBe('number');
    }

    it('should return an array with a length greater than 0'), () => {
        const coupons = getCoupons();
        coupons.forEach(coupon => {
            expect(coupon).toHaveProperty('code');
            expect(typeof coupon.code).toBe('string');
            expect(coupon.code).toBeTruthy();
        });
    }

    it('should return an array with valid discount'), () => {
        const coupons = getCoupons();
        coupons.forEach(coupon => {
            expect(coupon).toHaveProperty('discount');
            expect(typeof coupon.discount).toBe('number');
            expect(coupon.discount).toBeGreaterThan(0);
            expect(coupon.discount).toBeLessThanOrEqual(1);
        });
    }

     
})

describe('calculateDiscount', () => {
    it('Should return discounted price if given valid code', () => {
        expect(calculateDiscount( 10, 'SAVE10')).toBe(9);
    })

    it(' Should handle non-numeric price', () => {
        expect(calculateDiscount('10', 'SAVE10')).toMatch(/invalid/i)
    })

    it(' Should handle negative price', () => {
        expect(calculateDiscount('-10', 'SAVE10')).toMatch(/invalid/i)
    })

    it(' Should handle none-string discount code', () => {
        expect(calculateDiscount(10, 10)).toMatch(/invalid/i)
    })

    it(' Should handle invalid discount code', () => {
        expect(calculateDiscount(10, 'INVALID')).toBe(10)
    })
})

describe('validateUserInput', () => {
    it('should retuen success if given valid input', () => {
        expect(validateUserInput('SteveTech', 25)).toMatch(/success/i)
    })

    it('should return an error if user name is not a string', () => {
        expect(validateUserInput(2, 25)).toMatch(/invalid/i)
    })

    it('should return an error if user name is less than three characters  ', () => {
        expect(validateUserInput(2, 25)).toMatch(/invalid/i)
    })
    
    
    it('should return an error if user name is longer than 255 characters  ', () => {
        expect(validateUserInput('A'.repeat(256), 42)).toMatch(/invalid/i)
    })

    it('should return an error if user name not a valid number  ', () => {
        expect(validateUserInput('SteveTech', "42")).toMatch(/invalid/i)
    })

    it('should return an error if age is less than 18 ', () => {
        expect(validateUserInput('SteveTech', 10)).toMatch(/invalid/i)
    })

    it('should return an error if age age is greater than 100 ', () => {
        expect(validateUserInput('SteveTech', 101)).toMatch(/invalid/i)
    })

    it('should return an error if both age and userName invalid', () => {
        expect(validateUserInput('', 0)).toMatch(/invalid userName/i)
        expect(validateUserInput('', 0)).toMatch(/invalid age/i)
    })
})

//Boundary testing 

describe('canDrive', () => {

    it.each([
        { age: 15, country: 'US', result: false },
        { age: 16, country: 'US', result: true },
        { age: 17, country: 'US', result: true },
        { age: 16, country: 'UK', result: false },
        { age: 17, country: 'UK', result: true },
        { age: 18, country: 'UK', result: true },
    ])('Should return $result for $age, $country', ({ age, country, result }) => {
        expect(canDrive(age, country)).toBe(result)
    })

    // it(' Should return an error for invalid country code', () => {
    //     expect(canDrive(20, "FR")).toMatch(/invalid/i)
    // })

    // it(' Should return an error for invalid US county code country code', () => {
    //     expect(canDrive(15, "US")).toBe(false) 
    // })

    // it(' Should return true for min age in the US', () => {
    //     expect(canDrive(16, "US")).toBe(true)
    // })

    // it(' Should return true for eligible age in the US', () => {
    //     expect(canDrive(17, "US")).toBe(true)
    // })

    // it(' Should return an error for invalid UK county code country code', () => {
    //     expect(canDrive(16, "UK")).toBe(false)
    // })

    // it(' Should return true for min age in the UK', () => {
    //     expect(canDrive(17, "UK")).toBe(true)
    // })

    // it(' Should return true for eligible age in the UK', () => {
    //     expect(canDrive(18, "UK")).toBe(true)
    // })
})

describe('isPriceInRange', () => {
    it.each([
        { scenerio: 'price < min', price: -10, result: false},
        { scenerio: 'price = min', price: 0, result: true},
        { scenerio: 'price between min and max', price: 50, result: true},
        { scenerio: 'price > max', price: 200, result: false},
        { scenerio: 'price = max', price: 100, result: true},

    ])('should return $result for $scenerio', ({ price, result }) => {
        expect(isPriceInRange(price, 0, 100)).toBe(result)
    })
})


describe('fetchData', () => {
    it('Should return a promise that will resolve to an array of numbers', async() => {
        try {
            const result = await fetchData();
        } catch (error) {
            expect(error).toHaveProperty('reason');
            expect(error.reason).toMatch(/failed/i)
        }
       
    })
})

describe('test suit', () => {
    it('test case 1', () => {
        beforeAll(() =>{
            console.log('beforeAll called')
        })

        beforeEach(() => {
            console.log('beforeEach called')
        })

        afterAll(() => {
            console.log('afterAll called')
        })

        afterEach(() => {
            console.log('afterEach called ')
        })
    })

    it('test case 1', () => {
        
    })
})

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    it('push should add an item to the stack', () => {
        stack.push(1);

        expect(stack.size()).toBe(1);
    })

    it('pop should remove and return the top item from the stack', () => {
        stack.push(1);
        stack.push(2);

        const poppedItem = stack.pop();

        expect(poppedItem).toBe(2);
        expect(stack.size()).toBe(1); 
    })

    it('pop should throw an error if stack is empty', () => {
        expect(() => stack.pop()).toThrow(/empty/i); 
         
    })

    it('peek should return the item from  the stack without removing the element', () => {
        stack.push(1);
        stack.push(2);

        const peekedItem = stack.peek();
 
        expect(peekedItem).toBe(2);
        expect(stack.size()).toBe(2);
    })

    it('peek should throw an error if stack is empty', () => {
         expect(() => stack.peek()).toThrow(/empty/i);
    })

    it('isEmpty should return true if stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
    })

    it('isEmpty should return false if stack is not empty', () => {
        stack.push(1);

        expect(stack.isEmpty()).toBe(false);
    })

    it('size should return the number of items in the stack', () => {
        stack.push(1);
        stack.push(2);

        expect(stack.size()).toBe(2);
    })
})