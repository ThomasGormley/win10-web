export const match = (value, patterns, ...args) => {
    try {
        if (value in patterns) {
            return typeof patterns[value] === 'function'
                ? patterns[value](...args)
                : patterns[value];
        } else if (match.__ in patterns) {
            return typeof patterns[match.__] === 'function'
                ? patterns[match.__](...args)
                : patterns[match.__];
        } else {
            throw new Error();
        }
    } catch (err) {
        const available_keys = Object.keys(patterns);
        if (!available_keys.includes(value.toString())) {
            throw new Error(
                `Tried to handle "${value}" but no handler was defined. Only ${available_keys
                    .map((key) => `"${key}"`)
                    .join(', ')}.`,
            );
        }

        throw err;
    }
};

match.__ = Symbol();
