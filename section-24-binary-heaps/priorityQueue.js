"use strict";
class NODE {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    swap(i, ii) {
        let temp = this.values[i];
        this.values[i] = this.values[ii];
        this.values[ii] = temp;
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getChildIndexes(parentIndex) {
        let childIndexes = [];
        let hasFirstChild = !!this.values[parentIndex * 2 + 1];
        if (hasFirstChild)
            childIndexes.push(parentIndex * 2 + 1);
        else
            return [];
        let hasSecondChild = !!this.values[parentIndex * 2 + 2];
        if (hasSecondChild)
            childIndexes.push(parentIndex * 2 + 2);
        return childIndexes;
    }
    insert(val, priority) {
        var _a, _b;
        const node = new NODE(val, priority);
        let values = this.values;
        const length = values.push(node);
        // first element
        if (length == 1)
            return;
        // more
        let index = length - 1, parentIndex = this.getParentIndex(index);
        while (((_a = values[index]) === null || _a === void 0 ? void 0 : _a.priority) < ((_b = values[parentIndex]) === null || _b === void 0 ? void 0 : _b.priority)) {
            // swap with parent
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }
    extractMax() {
        var _a, _b, _c;
        if (this.values.length == 0)
            return this.values;
        let lastIndex = this.values.length - 1;
        this.swap(0, lastIndex);
        this.values.pop();
        let parentIdx = 0;
        while (true) {
            let childrenIndexes = this.getChildIndexes(parentIdx);
            const [firstIdx, secondIdx] = childrenIndexes;
            // check which bigger and swap.
            const isLast = childrenIndexes.length === 0;
            const hasTwoChildren = childrenIndexes.length === 2;
            let parentValue = (_a = this.values[parentIdx]) === null || _a === void 0 ? void 0 : _a.priority, firstVal = (_b = this.values[firstIdx]) === null || _b === void 0 ? void 0 : _b.priority, secondVal = (_c = this.values[secondIdx]) === null || _c === void 0 ? void 0 : _c.priority;
            if (isLast)
                break;
            if (hasTwoChildren) {
                const isParentMostPriority = parentValue < firstVal && parentValue < secondVal;
                // parent has more priority than all
                if (isParentMostPriority)
                    break;
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
