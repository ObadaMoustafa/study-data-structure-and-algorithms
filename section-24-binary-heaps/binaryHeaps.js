"use strict";
class BinaryTree {
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
        let hasSecondChild = !!this.values[parentIndex * 2 + 1];
        if (hasSecondChild)
            childIndexes.push(parentIndex * 2 + 2);
        return childIndexes;
    }
    insert(num) {
        let values = this.values;
        const length = values.push(num);
        // first element
        if (length == 1)
            return;
        // more
        let index = length - 1, parentIndex = this.getParentIndex(index);
        while (values[index] > values[parentIndex]) {
            // swap with parent
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }
    extractMax() {
        if (this.values.length == 0)
            return;
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
            let parentValue = this.values[parentIdx], firstVal = this.values[firstIdx], secondVal = this.values[secondIdx];
            if (isLast)
                break;
            if (hasTwoChildren) {
                const isParentGreeter = parentValue > firstVal && parentValue > secondVal;
                // parent is greater than all
                if (isParentGreeter)
                    break;
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
const binaryHeap = new BinaryTree();
binaryHeap.insert(41);
binaryHeap.extractMax();
console.log(binaryHeap.values);
