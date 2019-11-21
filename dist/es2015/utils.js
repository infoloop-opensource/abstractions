export const identity = (s) => s;
export const anonymizeClass = (clazz) => {
    return class extends clazz {
        constructor(...params) {
            super(...params);
        }
    };
};
