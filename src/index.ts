import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

/* const numbersColletion = new NumbersCollection([10, 5, -1, 9, 0, 2]);
const sorter = new Sorter(numbersColletion);
sorter.sort()
console.log(numbersColletion.data); */

const charactersCollection = new CharactersCollection('zywvu');
const sorter = new Sorter(charactersCollection);
sorter.sort()
console.log(charactersCollection.data);