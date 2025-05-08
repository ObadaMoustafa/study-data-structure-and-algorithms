class NODE {
  val: number | string;
  priority: number;
  constructor(val: number | string, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  values: NODE[];
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

    let hasSecondChild: boolean = !!this.values[parentIndex * 2 + 2];
    if (hasSecondChild) childIndexes.push(parentIndex * 2 + 2);

    return childIndexes;
  }

  insert(val: number | string, priority: number): void {
    const node = new NODE(val, priority);
    let values: NODE[] = this.values;
    const length: number = values.push(node);
    // first element
    if (length == 1) return;

    // more
    let index: number = length - 1,
      parentIndex: number = this.getParentIndex(index);
    while (values[index]?.priority < values[parentIndex]?.priority) {
      // swap with parent
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extractMax(): NODE[] {
    if (this.values.length == 0) return this.values;
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
      let parentValue: number = this.values[parentIdx]?.priority,
        firstVal: number = this.values[firstIdx]?.priority,
        secondVal: number = this.values[secondIdx]?.priority;

      if (isLast) break;
      if (hasTwoChildren) {
        const isParentMostPriority: boolean =
          parentValue < firstVal && parentValue < secondVal;
        // parent has more priority than all
        if (isParentMostPriority) break;
        // second has more priority than first child
        else if (secondVal < firstVal) {
          this.swap(secondIdx, parentIdx);
          parentIdx = secondIdx;
        }
        // first has more priority than second child
        else {
          this.swap(firstIdx, parentIdx);
          parentIdx = firstIdx;
        }
      }
      // if has one child.
      // first has more priority than parent
      else if (firstVal < parentValue) {
        this.swap(firstIdx, parentIdx);
        parentIdx = firstIdx;
      }
      // parent has more priority than first
      else {
        break;
      }
    }
    return this.values;
  }
}

const heap = new PriorityQueue();
heap.insert('should be top', 1);
heap.insert('ninth', 9);
heap.insert('second', 2);
heap.insert('seventh', 7);
heap.insert('eight', 8);
heap.insert('fifth', 5);
heap.insert('sixth', 6);
heap.insert('fourth', 4);
heap.insert('third', 3);
console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
