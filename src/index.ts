import { NumbersCollection } from "./Classes/NumbersCollection";
import { CharactersCollection } from "./Classes/CharactersCollection";
import { LinkedList } from "./Classes/LinkedList";

const numbersColletion = new NumbersCollection([10, 5, -1, 9, 0, 2]);
numbersColletion.sort()
console.log(numbersColletion.data);

const charactersCollection = new CharactersCollection('howruidgdjamzury',);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkdeList = new LinkedList();
linkdeList.add(-50)
linkdeList.add(15);
linkdeList.add(2);
linkdeList.add(-1);

linkdeList.sort()
linkdeList.print()