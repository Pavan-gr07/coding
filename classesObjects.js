class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newElement = new MyArray();
newElement.push("kk");
newElement.push("88");
newElement.push("98");
// newElement.pop();
newElement.delete(1);

console.log(newElement.data);
