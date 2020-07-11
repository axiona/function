import AssertCallback from "../assert/callback-arguments";
import Guard from "../guard/guard";
import Function from "../function";
import {List} from "ts-toolbelt";

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function CallbackArguments<Return  extends Value, Value, Extras extends any[] = any[]>(
    value : Value,
    validation : Function<List.Prepend<Extras, Value>, Return>,
    error : Function<List.Prepend<Extras, Value>, Error>,
    extras : Extras
) : Return
{
    AssertCallback(value, validation, error, extras);

    return value;
}