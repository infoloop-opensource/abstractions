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
export declare type Consumer<T> = UnaryOperator<T, Promise<void>>;