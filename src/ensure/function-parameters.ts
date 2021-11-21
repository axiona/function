import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import Guard from "./callback";
import Callable from "../callable";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function FunctionParameters<
    Assumption extends Callable
>(
    value : unknown,
    error : (value:unknown)=>Error = ThrowableType
) : Assumption {

    Guard.Parameters(value, TypeGuard, error)
    return <Assumption>value;
}
