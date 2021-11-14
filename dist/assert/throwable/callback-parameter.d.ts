import ArgumentType from "../../argument/argument";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
export declare type CallbackParameterArgument<Arguments extends unknown[], ErrorType extends Error> = ArgumentType<Arguments> & Message<(a: Validatable & ArgumentType<Arguments>) => string> & {
    error?: (message: string) => ErrorType;
};
export default function CallbackParameter<Arguments extends unknown[], ErrorType extends Error>({ argument, message, error }: CallbackParameterArgument<Arguments, Error>): ErrorType;
export default function CallbackParameter<Arguments extends unknown[]>({ argument, message, }: CallbackParameterArgument<Arguments, Error>): Error;
