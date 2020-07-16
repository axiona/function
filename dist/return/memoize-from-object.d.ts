import Return from "./return";
import Infer from "./infer/return";
import ObjectProperty from "@dikac/t-object/value/property";
import ValueMemoize from "@dikac/t-value/memoize";
/**
 * Wrap {@link Return} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class MemoizeFromObject<Container extends Return> implements Readonly<Return<Infer<Container>>> {
    subject: Container;
    memoize: ValueMemoize<ObjectProperty<'return', Container>>;
    constructor(subject: Container);
    get return(): Infer<Container>;
}
