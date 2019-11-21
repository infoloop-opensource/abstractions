export type Constructor<T = {}> = new (...args: any[]) => T;

export type Class<T> = Constructor<T>;

/**
 * runtime decorators should always return decorated class to be used later on.
 */
export type RuntimeClassDecorator<T> = (target: Class<T>) => Class<T>;

export interface Supplier<T> {
    (): Promise<T>;
}

export interface Consumer<T> {
    (t: T): Promise<void>;
}

export interface BiConsumer<T1, T2> {
    (t1: T1, t2: T2): Promise<void>;
}

export interface Transformer<S, T> {
    (s: S): T;
}

export interface AsyncTransformer<S, T> {
    (s: S): Promise<T>;
}

export interface BiTransformer<S1, S2, T> {
    (s: S1, s2: S2): T
}

export interface AsyncBiTransformer<S1, S2, T> {
    (s: S1, s2: S2): Promise<T>
}

/**
 * semantic alias of AsyncBiTransformer
 */
export type Joiner<S1, S2, T> = AsyncBiTransformer<S1, S2, T>;




