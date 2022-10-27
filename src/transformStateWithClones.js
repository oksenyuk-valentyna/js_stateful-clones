'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateCopy = { ...state };
  const stateArr = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(stateCopy, action.extraData);

        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete stateCopy[property];
        }

        break;

      case 'clear':
        Object.keys(stateCopy).forEach(key => delete stateCopy[key]);

        break;

      default:
        throw new Error('Check the action type');
    }
    stateArr.push({ ...stateCopy });
  }

  return stateArr;
}

module.exports = transformStateWithClones;
