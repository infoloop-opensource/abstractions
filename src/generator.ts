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
export type Supplier<T> = Generator<T>;

/**
 * semantic alias
 * @alias module:unary.Supplier
 */
export type Producer<T> = Generator<T>;

