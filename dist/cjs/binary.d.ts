/**
 * @module binary
 */
export interface BinaryOperator<LeftOperandType, RightOperandType, ReturnType> {
    (left: LeftOperandType, right: RightOperandType): ReturnType;
}
/**
 * semantic alias
 * @alias module:binary.BinaryOperator
 */
export declare type BiTransformer<SourceType1, SourceType2, TargetType> = BinaryOperator<SourceType1, SourceType2, TargetType>;
export declare type AsyncBiTransformer<S1, S2, T> = BiTransformer<S1, S2, Promise<T>>;
/**
 * semantic alias
 * @alias module:binary.BinaryOperator
 */
export declare type Joiner<DataType1, DataType2, JoinedDataType> = BinaryOperator<DataType1, DataType2, JoinedDataType>;
export declare type AsyncJoiner<S1, S2, T> = Joiner<S1, S2, Promise<T>>;
export declare type BiConsumer<SourceType1, SourceType2> = BinaryOperator<SourceType1, SourceType2, Promise<void>>;
export declare type Comparator<T> = BinaryOperator<T, T, number>;
export declare type Reducer<ReducedType, OriginalType> = BinaryOperator<ReducedType, OriginalType, ReducedType>;
/**
 * semantic alias
 * @alias module:binary.Reducer
 */
export declare type Accumulator<AccumulatedType, OriginalType> = Reducer<AccumulatedType, OriginalType>;
