/**
 * 入力必須バリデーション
 * @param val
 * @returns {boolean}
 */
function exist(val) {
    if (val === undefined || val === null || !val) {
        return false;
    }
    val = val.toString();
    return val !== '' && val.length > 0;
}

/**
 * 全てが全角か
 * @param val
 * @returns {boolean}
 */
function isAllZen(val) {
    if (!exist(val)) {
        return false;
    }

    return !!(val.toString().match(/^[^\x01-\x7E\xA1-\xDF]+$/));
}

/**
 * 全てが平仮名か
 * @param val
 * @returns {boolean}
 */
function isAllHira(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[\u3041-\u3096]+$/));
}

/**
 * 全てがカタカナか
 * @param val
 * @returns {boolean}
 */
function isAllKana(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[\u30a1-\u30f6]+$/));
}

/**
 * 全てが大文字アルファベットか
 * @param val
 * @returns {boolean}
 */
function isAllUpperCaseAlphabet(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[A-Z]+$/));
}

/**
 * 全てが小文字アルファベットか
 * @param val
 * @returns {boolean}
 */
function isAllLowerCaseAlphabet(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[a-z]+$/));
}

/**
 * 全て半角アルファベットか
 * @param val
 * @returns {boolean}
 */
function isAllAlphabet(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[a-zA-Z]+$/));
}

/**
 * 全て半角英数字か
 * @param val
 * @returns {boolean}
 */
function isAllAlphaNumeric(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[0-9a-zA-Z]+$/));
}

/**
 * 全て半角数字か
 * @param val
 * @returns {boolean}
 */
function isAllNumeric(val) {
    if (!exist(val)) {
        return false;
    }
    return !!(val.toString().match(/^[0-9]+$/));
}

export {
    exist,
    isAllZen,
    isAllHira,
    isAllKana,
    isAllUpperCaseAlphabet,
    isAllLowerCaseAlphabet,
    isAllAlphabet,
    isAllAlphaNumeric,
    isAllNumeric,
}