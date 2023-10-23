class DataConverter {
    static #YES = "Yes";
    static #NO = "No";
    static boolToString = value => value ? DataConverter.#YES : DataConverter.#NO
    static stringToBool = value => value === DataConverter.#YES;
}