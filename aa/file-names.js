const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCount = {};
  const result = [];

  for (const file of names) {
    if (nameCount[file] === undefined) {
      nameCount[file] = 0;
      result.push(file);
    } else {
      nameCount[file] += 1;
      const newName = `${file}(${nameCount[file]})`;

      while (nameCount[newName] !== undefined) {
        nameCount[file] += 1;
        nameCount[newName] += 1;
      }
      nameCount[newName] = 0;
      result.push(newName);
    }
  }
  return result;
}
module.exports = {
  renameFiles,
};