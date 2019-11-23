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

export type Consumer<T> = UnaryOperator<T, Promise<void>>;
