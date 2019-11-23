/**
 * @module generator
 */
export interface Generator<T> {
    (): Promise<T>;
}
/**
 * semantic alias
 * @alias module:unary.Generator
 */
export declare type Supplier<T> = Generator<T>;
/**
 * semantic alias
 * @alias module:unary.Supplier
 */
export declare type Producer<T> = Generator<T>;
