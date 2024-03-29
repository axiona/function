import PipeCallback from '../../dist/pipe-callback.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', function() {


    it('test single', function () {

        const pipe = PipeCallback(()=>1)
        (num=>num+1);

        expect(pipe.returns).toEqual(2);

    });

    it('multi', function () {

        const pipe = PipeCallback(()=>1)
        (num=>num+1)
        (num=>num+1);

        expect(pipe.returns).toEqual(3);

    });

    it('change type', function () {

        const pipe = PipeCallback(()=>1)
        (num=>num+1)
        (num=>num+1)
        (num=>({num}));

        expect(pipe.returns).toEqual({num: 3});

    });

});
