import stringCalc from '../stringCalc';

describe('initial test', () => {
    it('do some simple stuff', () => {
        expect(stringCalc('')).toBe(0);
    });
});

describe('second tests wave', () => {
    it('adds numbers', () => {
        expect(stringCalc('1')).toBe(1);
    });

    it('adds numbers', () => {
        expect(stringCalc('1,2')).toBe(3);
    });
})
