function circleArray() {
  this.items = [];
}
circleArray.prototype.get = function (index) {
  const length = this.items.length;
  if (index < 0) {
    const indexItem = index + length;
    return this.items[indexItem];
  }
  if (index > length) {
    const indexItem = index - length;
    return this.items[indexItem];
  }
  return this.items[index];
};

circleArray.prototype.add = function (item) {
  this.items.push(item);
};