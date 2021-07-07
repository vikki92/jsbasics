/**
 * Change the capitalization of all letters in a string
 */
export const changeCase = (strOriginal) => {
    let strChanged = "";
    for (let i = 0; i < strOriginal.length; i++) {
        let charOriginal = strOriginal[i];
        let charToUpperCase = charOriginal.toUpperCase();
        let charToOpositeCase = charOriginal == charToUpperCase ? charOriginal.toLowerCase() : charToUpperCase;
        strChanged += charToOpositeCase;
    }
    return strChanged;
};

/**
 * Filter out the non-unique values in an array
 */
export const filterNonUnique = (arr) => {
    let unique = [];
    let duplicates = [];
    for (let value of arr) {
        let indexOfValue = unique.indexOf(value);
        if (indexOfValue < 0) 
            unique.push(value);
        else
            duplicates.push(value); 
    }
    return unique.filter((el) => !duplicates.includes(el));
};

/**
 * Sort string in alphabetical order
 */
export const alphabetSort = (str) => {
    if (typeof str === 'string' || str instanceof String) {
        return [...str].sort().join("");
    } else {
        throw "not a string";
    }
};

/**
 * Get min integer
 */
export const getSecondMinimum = (arr) => {
    let min = Math.min(...arr);
    let filtedArray = arr.filter(n => n != min);
    return Math.min(...filtedArray);
};

/**
 * Double every even integer
 */
export const doubleEveryEven = (arr) => {
    let doubledEvenArr = [];
    for (let value of arr) {
        if (value % 2 == 0) {
            value = 2 * value;
        }
        doubledEvenArr.push(value);
    }
    return doubledEvenArr;
};

/**
 * Create array with all possible pairs of two arrays
 */
export const getArrayElementsPairs = (arr1, arr2) => {
    var arr = [];
    for (let value1 of arr1) {
        for (let value2 of arr2) {
            arr.push([value1, value2])
        }
    }
    return arr;
};

/**
 * Deep equal
 */
export const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2)
        return true;

    if (obj1 == null || obj2 == null)
        return false;

    if (typeof obj1 == "object" && typeof obj2 == "object") {
        if (Object.keys(obj1).length != Object.keys(obj2).length)
            return false;

        for (var prop in obj1) {
            if (obj2.hasOwnProperty(prop)) {
                if (!deepEqual(obj1[prop], obj2[prop]))
                    return false;
            }
            else
                return false;
        }

        return true;
    }

    return false;
};

/**
 * Format date
 */
export const formatDate = (rawDate) => {
    if (rawDate == null || typeof rawDate == 'bigint') {
        return NaN;
    }

    let dateObject;

    if (typeof rawDate == 'Date') {
        dateObject = rawDate;
    } else if (Array.isArray(rawDate)) {
        dateObject = new Date(...rawDate);
    } else {
        dateObject = new Date(rawDate);
    }

    if (Number.isNaN(dateObject.getFullYear())) {
        return NaN;
    }

    let year = dateObject.getFullYear().toString().substr(-2);
    
    let month = (dateObject.getMonth() + 1).toString();
    if (month.length == 1) {
        month = "0" + month;
    }
    
    let day = dateObject.getDate().toString();
    if (day.length == 1) {
        day = "0" + day;
    }

    return `${day}.${month}.${year}`;
};
