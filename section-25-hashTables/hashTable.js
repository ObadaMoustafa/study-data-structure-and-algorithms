"use strict";
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        const hashIndex = this._hash(key);
        console.log(hashIndex);
        const location = this.keyMap[hashIndex];
        if (!location)
            this.keyMap[hashIndex] = [[key, value]];
        else
            this.keyMap[hashIndex].push([key, value]);
    }
    get(key) {
        const index = this._hash(key);
        const location = this.keyMap[index];
        if (location) {
            for (let i = 0; i < location.length; i++) {
                const element = location[i];
                const [storedKey, value] = element;
                if (storedKey == key)
                    return value;
            }
        }
        return;
    }
    values() {
        const length = this.keyMap.length;
        const results = [];
        for (let i = 0; i < length; i++) {
            const table = this.keyMap[i];
            if (!table)
                continue;
            for (let j = 0; j < table.length; j++) {
                const element = table[j];
                if (!results.includes(element[1]))
                    results.push(element[1]);
            }
        }
        return results;
    }
    keys() {
        const length = this.keyMap.length;
        const results = [];
        for (let i = 0; i < length; i++) {
            const table = this.keyMap[i];
            if (!table)
                continue;
            for (let j = 0; j < table.length; j++) {
                const element = table[j];
                if (!results.includes(element[0]))
                    results.push(element[0]);
            }
        }
        return results;
    }
}
const hash = new HashTable();
hash.set('yellow', 150);
hash.set('yellow', 150);
hash.set('yellow', 150);
hash.set('red', 50);
hash.set('cyan', 871);
hash.set('cyan', 871);
