# Sets

Implements set operations for JavaScript Set objects.

## Installation

```bash
npm install @lesleh/sets
```

## Features

- `equal(set1, set2)`: Returns true if the two sets are equal.

## Usage

```javascript
import { equal } from '@lesleh/sets';

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 2, 1]);

console.log(equal(set1, set2)); // true
```
