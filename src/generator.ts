/**
 * @module generator
 */


export interface Generator<T> {
    (): Promise<T>;
}

/**
 * TODO: better description of params
 */
export interface ParameterizedGenerator<T> {
    (...params: any[]): Promise<T>;
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

