import ArgumentContainer from '../argument/argument.js';
import Return from '../return/return.js';
import Callable from '../callable.js';
import Find from '@axiona/iterable/value/find.js';
import Callback from '../callback/callback.js';
import Validation from '@axiona/boolean/validation/validation.js';
import DynamicMemoizeContainerParametersC from './dynamic-memoize-container.js';

type Memoized<CallbackType extends Callable> = ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>>;

export class DynamicMemoizeContainerParameters<
    CallbackType extends Callable,
> {

    readonly memoized : Memoized<CallbackType>[] = [];

    constructor(
        public callback : CallbackType,
        public validation : Callable<[Parameters<CallbackType>, Parameters<CallbackType>], boolean>
    ){}

    call(argument : Parameters<CallbackType>) : ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>> {

        return {
            argument : argument,
            return : <ReturnType<CallbackType>> this.callback(...argument)
        };
    }

    memoize(argument : Parameters<CallbackType>) : ArgumentContainer<Parameters<CallbackType>> & Return<ReturnType<CallbackType>> {

        let memoized = this.get(argument);

        if(!memoized) {

            memoized = this.call(argument);
            this.memoized.push(memoized);
        }

        return memoized;
    }

    get(argument : Parameters<CallbackType>) : Memoized<CallbackType>|null {

        return Find.Parameters(
            this.memoized,
            (memoized)=> this.validation(argument, memoized.argument),
            null
        );
    }
}



export type DynamicMemoizeContainerArgument<CallbackType extends Callable> =
    Callback<CallbackType> &
    Validation<[Parameters<CallbackType>, Parameters<CallbackType>]>;

export class DynamicMemoizeContainerParameter<C extends Callable> extends DynamicMemoizeContainerParametersC.Parameters<C> {

    constructor({callback, validation} : DynamicMemoizeContainerArgument<C>) {
        super(callback, validation);
    }
}


namespace DynamicMemoizeContainer {
    export const Parameters = DynamicMemoizeContainerParameters;
    export const Parameter = DynamicMemoizeContainerParameter;
    export type Argument<CallbackType extends Callable> = DynamicMemoizeContainerArgument<CallbackType>;
}
export default DynamicMemoizeContainer;
