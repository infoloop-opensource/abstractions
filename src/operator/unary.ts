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
export type Transformer<SourceType, TargetType> = UnaryOperator<SourceType, TargetType>;

export type AsyncTransformer<SourceType, TargetType> = Transformer<SourceType, Promise<TargetType>>;

export type Predicate<T> = UnaryOperator<T, boolean>;

export type AsyncPredicate<T> = UnaryOperator<T, Promise<boolean>>;

/**
 * A boolean indicates whether the message has been consumed successfully.
 */
export type Consumer<T> = UnaryOperator<T, Promise<boolean>>;
