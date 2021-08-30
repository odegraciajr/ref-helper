/**
 * For set value you only need to set 1 or 0,
 * this will automatically set auction only to true or false.
 *
 * For card value we adjusted 0 as default which means no action
 * and still respect set value for auction only. Once you set card value
 * to 1 this will force isAuctionOnly to false and 2 true.
 * @param {int} setVal
 * @param {int} cardVal
 * @returns bool
 */
function getAuctionOnlyValues(setVal, cardVal) {
  // detect if card value is not default
  if (cardVal !== 0) {
    return cardVal === 2;
  }

  if (setVal) {
    return true;
  }

  return false;
}

module.exports = {
  getAuctionOnlyValues
};
