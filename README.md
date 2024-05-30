# Sets

Implements set operations for JavaScript Set objects.

## Installation

```bash
npm install @lesleh/sets
```

## Functions

- `equal(set1, set2)`: Returns true if the two sets are equal.
- `intersection(set1, set2)`: Returns the intersection of the two sets.
- `union(set1, set2)`: Returns the union of the two sets.

## Usage

```javascript
import { equal } from '@lesleh/sets';

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 2, 1]);

console.log(equal(set1, set2)); // true
```
