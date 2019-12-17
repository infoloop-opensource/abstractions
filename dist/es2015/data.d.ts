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
