const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let memberStrings = members.filter(el => typeof el === 'string')
  let letters = []
  for (let i = 0; i < memberStrings.length; i++) {
    let member = memberStrings[i]
    letters.push(member.trim().split('').slice(0, 1)
    )
  }
  letters = letters.flat().map(ltr => ltr.toUpperCase()).sort().join('')
  return letters
}

module.exports = {
  createDreamTeam
};
