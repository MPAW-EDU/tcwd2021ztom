
/**
 *   ES 10
 *   Released in 2019
 */


/**
 *  .flat() is mainly used to flatten out arrays nested in arrays,
 *   but can also clean up blank array entries.
 */
const array = [1,2, [2.1,2.2,2.3],3,4,[4.1,4.2,4.3,4.4],5];

console.log(array);
console.log(array.flat());

const array2 = [1,[2,[3]]]
console.log(array2);
console.log(array2.flat(2));

const array3 = ['Bob', 'Sandra',,,,,,,'Celine'];
console.log(array3.flat());

const array4 = ['Bob','Sandra',['Karen',,,,,],,,,'Celine'];
console.log(array4.flat());


/**
 *  .flatMap()   a combination of flat and map which can be used on
 *   an array.
 * 
 *  Note: This will not cleanup data in nested arrays as it flattens and 
 *  adds your changes.
 */

const attackOfSteves = array3.flatMap(worker => `${worker} Steve`);

console.log(attackOfSteves);




/**
 *  .trimStart() nips things out at the beginning
 *  .trimEnd() nips things out at the end
 */

const userEmail1 ='      edd@email.com';
const userEmail2 = `john@email.com     `;

console.log(userEmail1.trimStart());
console.log(userEmail2.length, userEmail2.trimEnd().length);

/**
 *  @function Object.fromEntries()
 * 
 *  @description  transforms value keypairs into an object
 * 
 *  @note This is in counter balance to Object.entries(),
 *        it will produce an obj, and can be undone by using it's
 *        counterpart.
 */

const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

const userObj = Object.fromEntries(userProfiles)
console.log(userObj);
console.log(Object.entries(userObj));


/**
 *  @function try / catch
 * 
 *  There was an update to these, detailed below.
 */

try {
    f
} catch {
    console.log('Done broke something.');
}