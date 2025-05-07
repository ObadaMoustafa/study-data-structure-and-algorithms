var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.values = [];
    }
    BinaryTree.prototype.swap = function (i, ii) {
        var temp = this.values[i];
        this.values[i] = this.values[ii];
        this.values[ii] = temp;
    };
    BinaryTree.prototype.getParentIndex = function (index) {
        return Math.floor((index - 1) / 2);
    };
    BinaryTree.prototype.getChildIndexes = function (parentIndex) {
        var childIndexes = [];
        var hasFirstChild = !!this.values[parentIndex * 2 + 1];
        if (hasFirstChild)
            childIndexes.push(parentIndex * 2 + 1);
        else
            return [];
        var hasSecondChild = !!this.values[parentIndex * 2 + 1];
        if (hasSecondChild)
            childIndexes.push(parentIndex * 2 + 2);
        return childIndexes;
    };
    BinaryTree.prototype.insert = function (num) {
        var values = this.values;
        var length = values.push(num);
        // first element
        if (length == 1)
            return;
        // more
        var index = length - 1, parentIndex = this.getParentIndex(index);
        while (values[index] > values[parentIndex]) {
            // swap with parent
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    };
    BinaryTree.prototype.extractMax = function () {
        if (this.values.length == 0)
            return;
        var lastIndex = this.values.length - 1;
        this.swap(0, lastIndex);
        this.values.pop();
        var parentIdx = 0;
        while (true) {
            var childrenIndexes = this.getChildIndexes(parentIdx);
            var firstIdx = childrenIndexes[0], secondIdx = childrenIndexes[1];
            // check which bigger and swap.
            var isLast = childrenIndexes.length === 0;
            var hasTwoChildren = childrenIndexes.length === 2;
            var parentValue = this.values[parentIdx], firstVal = this.values[firstIdx], secondVal = this.values[secondIdx];
            if (isLast)
                break;
            if (hasTwoChildren) {
                var isParentGreeter = parentValue > firstVal && parentValue > secondVal;
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
    };
    return BinaryTree;
}());
var heap = new BinaryTree();
heap.insert(41);
heap.extractMax();
console.log(heap.values);
