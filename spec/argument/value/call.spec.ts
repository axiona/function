import Call from '../../../dist/argument/value/call.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', function() {

    const object : {
        argument : [number],
        callback : (number : number) => number,
        return : number
    } = {
        argument : [1],
        callback : (number : number) => {
            return number + number;
        },
        return : 0
    };

    it('call', () => {

        const returns = Call.Parameter(object);

        expect(returns).toBe(2);
        expect(object.return).toBe(0);
    });

});
