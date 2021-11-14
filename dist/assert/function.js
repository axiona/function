import GuardType from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import CallbackParameters from "./callback-parameters";
/**
 * Throw exception from {@param error} if given {@param value} is no callable type
 */
export default function Function(value, error = ThrowableType) {
    CallbackParameters(value, GuardType, error);
}
//# sourceMappingURL=function.js.map