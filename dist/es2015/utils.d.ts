import { Constructor } from './abstractions';
export declare const identity: <S>(s: S) => S;
export declare const anonymizeClass: <BaseType extends Constructor<{}>>(clazz: BaseType) => BaseType;
