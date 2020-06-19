import Argument from "./argument/argument";
import Returns from "./return/returns";
import Functions from "./functions";
import { DynamicMemoizeContainer } from "./object/dynamic-memoize-container";
export default function DynamicMemoize<Fn extends Functions>(callable: Fn, compareArguments?: Functions<[Parameters<Fn>, Parameters<Fn>], boolean>): Fn & DynamicMemoizeContainer<Fn>;
export declare class Container<Fn extends (...argument: Arg) => Return, Arg extends any[], Return> {
    private compare;
    readonly ios: (Argument<Arg> & Returns<Return>)[];
    constructor(compare: (cached: Arg, argument: Arg) => boolean);
    call(fn: Fn, argument: Arg): Argument<Arg> & Returns<Return>;
    get(argument: Arg): (Argument<Arg> & Returns<Return>) | null;
}
