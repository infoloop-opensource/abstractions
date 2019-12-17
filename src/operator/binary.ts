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
export type BiTransformer<SourceType1, SourceType2, TargetType> = BinaryOperator<SourceType1, SourceType2, TargetType>;

export type AsyncBiTransformer<S1, S2, T> = BiTransformer<S1, S2, Promise<T>>;

/**
 * semantic alias
 * @alias module:binary.BinaryOperator
 */
export type Joiner<DataType1, DataType2, JoinedDataType> = BinaryOperator<DataType1, DataType2, JoinedDataType>;

export type AsyncJoiner<S1, S2, T> = Joiner<S1, S2, Promise<T>>;

export type BiConsumer<SourceType1, SourceType2> = BinaryOperator<SourceType1, SourceType2, Promise<void>>;

export type Comparator<T> = BinaryOperator<T, T, number>;

export type Reducer<ReducedType, OriginalType> = BinaryOperator<ReducedType, OriginalType, ReducedType>;

/**
 * semantic alias
 * @alias module:binary.Reducer
 */
export type Accumulator<AccumulatedType, OriginalType> = Reducer<AccumulatedType, OriginalType>;


