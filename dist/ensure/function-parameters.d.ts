import Callable from "../callable";
/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function FunctionParameters<Assumption extends Callable>(value: unknown, error?: (value: unknown) => Error): Assumption;
