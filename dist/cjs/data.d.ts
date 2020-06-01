import { Consumer } from "./operator/unary";
/**
 * Abstraction of a data source.
 * A data source should support at least one of two models:
 *   1. pull model, of which implementation should a blocking one.
 *   2. push model
 */
export interface DataSource<T> {
    retrieve(): T;
    onGeneration(consumer: Consumer<T>): any;
}
/**
 * @Beta this abstraction might be changed or removed.
 * Abstraction of existence in logic world.
 * Why is a generic type T there?
 *  - This is always the definition of all db entities in a system, namely the business logic world.
 *    Sometimes class definitions themselves can not be used to identify a type.
 *    For example, an entity class can be related to two tables in different dbs.
 * Why use the word being instead of entity?
 *  - Being is a more generalized concept. Being means more than objective existence.
 * Example usage:
 *  - ts does not support enum type nicely, you may have to code in the following way:
 *  enum Entities {
 *      PERSON = 1,
 *      SHOP = 2
 *  }
 *  const existence: Being<typeof Entities> = {
 *      type: 'PERSON',
 *      id: 1
 *  };
 */
export interface Being<T> {
    type: keyof T;
    id: number | string;
}
export interface Reloader<T> {
    getCurrent(): T | undefined;
    reload(): Promise<void>;
}
