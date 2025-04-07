import { it, expect, describe } from 'vitest'
import { getCoupons } from "../src/intro"; 
import { calculateDiscount } from "../src/core"
import { validateUserInput } from '../src/core';

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
})
    