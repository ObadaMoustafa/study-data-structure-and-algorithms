type Values = number[];

class BinaryTree {
  values: Values;
  constructor() {
    this.values = [];
  }

  swap(i: number, ii: number): void {
    let temp = this.values[i];
    this.values[i] = this.values[ii];
    this.values[ii] = temp;
  }

  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  getChildIndexes(parentIndex: number): number[] {
    let childIndexes: number[] = [];

    let hasFirstChild: boolean = !!this.values[parentIndex * 2 + 1];
    if (hasFirstChild) childIndexes.push(parentIndex * 2 + 1);
    else return [];

    let hasSecondChild: boolean = !!this.values[parentIndex * 2 + 1];
    if (hasSecondChild) childIndexes.push(parentIndex * 2 + 2);

    return childIndexes;
  }

  insert(num: number): void {
    let values: Values = this.values;
    const length: number = values.push(num);
    // first element
    if (length == 1) return;

    // more
    let index: number = length - 1,
      parentIndex: number = this.getParentIndex(index);
    while (values[index] > values[parentIndex]) {
      // swap with parent
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extractMax(): number[] | void {
    if (this.values.length == 0) return;
    let lastIndex: number = this.values.length - 1;
    this.swap(0, lastIndex);
    this.values.pop();
    let parentIdx: number = 0;

    while (true) {
      let childrenIndexes = this.getChildIndexes(parentIdx);
      const [firstIdx, secondIdx] = childrenIndexes;
      // check which bigger and swap.
      const isLast: boolean = childrenIndexes.length === 0;
      const hasTwoChildren: boolean = childrenIndexes.length === 2;
      let parentValue: number = this.values[parentIdx],
        firstVal: number = this.values[firstIdx],
        secondVal: number = this.values[secondIdx];

      if (isLast) break;
      if (hasTwoChildren) {
        const isParentGreeter: boolean =
          parentValue > firstVal && parentValue > secondVal;
        // parent is greater than all
        if (isParentGreeter) break;
        // second is greater than first child
        else if (secondVal > firstVal) {
          this.swap(secondIdx, parentIdx);
          parentIdx = secondIdx;
        }
        // first is greater than second child
        else {
          this.swap(firstIdx, parentIdx);
          parentIdx = firstIdx;
        }
      }
      // first is greater than parent
      else if (firstVal > parentValue) {
        this.swap(firstIdx, parentIdx);
        parentIdx = firstIdx;
      }
      // parent is greater than first
      else {
        break;
      }
    }
    return this.values;
  }
}

const heap = new BinaryTree();
heap.insert(41);

heap.extractMax();
console.log(heap.values);
