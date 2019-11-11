/**
 * Author: https://github.com/haryanapnx
 * @param {*} value
 * @returns {boolean}
 */

/**
 * This function will checking for value that
 * passed into parameter, and check the value
 *
 * if value {null}, {undefined}, {0}, {''}
 * will returns true
 */
export const isEmpty = (value) => {
   return !(!!value ? typeof value === 'object' ? Array.isArray(value) ? !!value.length : !!Object.keys(value).length : true : false);
};
