import {Constructor, Transformer} from './abstractions';

export const identity = <S> (s: S): S => s;

export const anonymizeClass = <BaseType extends Constructor>(clazz: BaseType): BaseType => {
    return class extends clazz {
        constructor(...params) {
            super(...params);
        }
    };
};
