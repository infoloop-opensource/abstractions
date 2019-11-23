export declare type Constructor<T = {}> = new (...args: any[]) => T;
export declare type Class<T = {}> = Constructor<T>;
/**
 * runtime decorators should always return decorated class to be used later on.
 */
export declare type RuntimeClassDecorator<T> = (target: Class<T>) => Class<T>;
/**
 * Definition of any heterogeneous enum is discouraged.
 * IntValuedEnum refers to enums like:
 * enum Fruit {
 *     APPLE = 1,
 *     BANANA = 2
 * }
 */
export declare type IntValuedEnum = {
    [key: string]: number;
} & {
    [key: number]: string;
};
/**
 * Definition of any heterogeneous enum is discouraged.
 * IntValuedEnum refers to enums like:
 * enum Fruit {
 *     APPLE = "APPLE",
 *     BANANA = "BANANA"
 * }
 */
export declare type StringValuedEnum = {
    [key: string]: string;
};
