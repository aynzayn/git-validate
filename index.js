'use strict';

const { validateBranchName } = require('./lib/validateBranchName');
console.warn('@aynzayn/index.js');

module.exports = branch => {
  console.warn('@aynzayn/index.js - export');
  const branchName = branch || require('current-git-branch');
  return validateBranchName(branchName, null, false);
};
