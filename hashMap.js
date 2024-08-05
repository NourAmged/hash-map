class HashElement {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashMap {
    constructor(tableSize = 8) {
        this.tableSize = tableSize;
        this.hashArray = Array.from({ length: tableSize }, () => []);
        this.maxLoadFactor = 0.75;
        this.numElements = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return Math.abs(hashCode) % this.tableSize;
    }

    set(key, value) {
        if (this.loadFactor() > this.maxLoadFactor) {
            this.resize(this.tableSize * 2);
        }
        const index = this.hash(key);
        const bucket = this.hashArray[index];

        for (let elem of bucket) {
            if (elem.key === key) {
                elem.value = value;
                return;
            }
        }

        const hashElem = new HashElement(key, value);
        bucket.push(hashElem);
        this.numElements++;
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.hashArray[index];

        for (let elem of bucket) {
            if (elem.key === key) {
                return elem.value;
            }
        }
        return undefined;
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.hashArray[index];
        for (let elem of bucket) {
            if (elem.key === key) return true;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.hashArray[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.numElements--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.numElements;
    }

    clear() {
        this.hashArray = Array.from({ length: this.tableSize }, () => []);
        this.numElements = 0;
    }

    keys() {
        const keysArray = [];
        for (let buckets of this.hashArray) {
            for (let elem of buckets) {
                keysArray.push(elem.key);
            }
        }
        return keysArray;
    }

    values() {
        const valueArray = [];
        for (let buckets of this.hashArray) {
            for (let elem of buckets) {
                valueArray.push(elem.value);
            }
        }
        return valueArray;
    }

    entries() {
        const keyAndValue = [];
        for (let buckets of this.hashArray) {
            for (let elem of buckets) {
                keyAndValue.push([elem.key, elem.value]);
            }
        }
        return keyAndValue;
    }

    loadFactor() {
        return this.numElements / this.tableSize;
    }

    resize(newSize) {
        const oldArray = this.hashArray;
        this.tableSize = newSize;
        this.hashArray = Array.from({ length: newSize }, () => []);
        this.numElements = 0;

        for (const bucket of oldArray) {
            for (const elem of bucket) {
                this.set(elem.key, elem.value);
            }
        }
    }
}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon', 'silver')

console.log(test.entries());
