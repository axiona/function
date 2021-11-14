import Callable from "../callable";
import Callback from "../callback/callback";
import Validation from "@dikac/t-boolean/validation/validation";
import DynamicMemoizeContainerParameters from "./dynamic-memoize-container-parameters";
export declare type DynamicMemoizeContainerParameterArgument<CallbackType extends Callable> = Callback<CallbackType> & Validation<[Parameters<CallbackType>, Parameters<CallbackType>]>;
export default class DynamicMemoizeContainerParameter<C extends Callable> extends DynamicMemoizeContainerParameters<C> {
    constructor({ callback, validation }: DynamicMemoizeContainerParameterArgument<C>);
}
