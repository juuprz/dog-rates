function getPostPop(currentPopularity = null) {
  let current = Date.now();
  if (currentPopularity) {
    return currentPopularity + current / 2;
  } else {
    return current;
  }
}
module.exports = {
  getPostPop
}