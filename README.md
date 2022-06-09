# Design Patterns Project

- Sorting different Data Structures.
- Learning how to sort arrays, characters collection(strings) and LinkedLists.

### Architecture.

**Parent Class**

- Sorter
<!-- A reusable Abstract class which does the sorting -->

**SubClasses**

- NumbersCollection
- CharactersCollection
- LinkedList
<!-- This classes inherit from Sorter class and they must satisfy the class with required methods -->

```js
/* TODO: Make this class reusable to subclasses*/
  class Sorter {
    constructor(public collection: number[]) {}

    sort(): void {
      const { length } = this.collection;
      for(let i = 0; i < length; i++) {
        for(let j = 0; j < length - i - 1; j++) {
          if(this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
  }

  const sorter = new Sorter([10, 5, -1, 9, 0, 2]);
  sorter.sort();
  console.log(sorter.collection);
```

- What's the difference between Abstract classes and interfces 🤔
