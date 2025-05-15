class HashTable {
  keyMap: any[];
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key: string): number {
    let total: number = 0;
    let WEIRD_PRIME: number = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char: string = key[i];
      let value: number = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: string | number): void {
    const hashIndex = this._hash(key);
    console.log(hashIndex);

    const location = this.keyMap[hashIndex];

    if (!location) this.keyMap[hashIndex] = [[key, value]];
    else this.keyMap[hashIndex].push([key, value]);
  }

  get(key: string): object | undefined {
    const index: number = this._hash(key);
    const location: any[] = this.keyMap[index];

    if (location) {
      for (let i = 0; i < location.length; i++) {
        const element = location[i];
        const [storedKey, value] = element;
        if (storedKey == key) return value;
      }
    }

    return;
  }

  values(): (number | string)[] {
    const length: number = this.keyMap.length;
    const results: any[] = [];
    for (let i = 0; i < length; i++) {
      const table = this.keyMap[i];
      if (!table) continue;
      for (let j = 0; j < table.length; j++) {
        const element: any[] = table[j];
        if (!results.includes(element[1])) results.push(element[1]);
      }
    }

    return results;
  }

  keys(): string[] {
    const length: number = this.keyMap.length;
    const results: string[] = [];
    for (let i = 0; i < length; i++) {
      const table = this.keyMap[i];
      if (!table) continue;
      for (let j = 0; j < table.length; j++) {
        const element: any[] = table[j];
        if (!results.includes(element[0])) results.push(element[0]);
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
