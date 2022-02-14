const context = require('./context')

test('null/undefined/empty test', () => {
    expect(context.formatPhone(null)).toBe('');
    expect(context.formatPhone(undefined)).toBe('');
    expect(context.formatPhone('')).toBe('');
});

test('regexp test', () => {
    expect(context.formatPhone('123')).toBe('23');
    expect(context.formatPhone('12345')).toBe('(234) 5');
    expect(context.formatPhone('1234567899')).toBe("(234) 567-\n899");
});

test('functional test', () => {
    expect(context.formatPhone('234567899')).toBe("(234) 567-\n899");
    expect(context.formatPhone('234')).toBe('234');
    expect(context.formatPhone('2345')).toBe('(234) 5');
});