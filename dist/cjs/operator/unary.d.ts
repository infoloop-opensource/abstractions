/**
 * @module unary
 */
export interface UnaryOperator<OperandType, ReturnType> {
    (operand: OperandType): ReturnType;
}
/**
 * semantic alias
 * @alias module:unary.UnaryOperator
 */
export declare type Transformer<SourceType, TargetType> = UnaryOperator<SourceType, TargetType>;
export declare type AsyncTransformer<SourceType, TargetType> = Transformer<SourceType, Promise<TargetType>>;
export declare type Predicate<T> = UnaryOperator<T, boolean>;
export declare type AsyncPredicate<T> = UnaryOperator<T, Promise<boolean>>;
/**
 * A boolean indicates whether the message has been consumed successfully.
 */
export declare type Consumer<T> = UnaryOperator<T, Promise<boolean>>;
