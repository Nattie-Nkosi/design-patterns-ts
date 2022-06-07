import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersColletion = new NumbersCollection([10, 5, -1, 9, 0, 2]);
const sorter = new Sorter(numbersColletion);
sorter.sort()
console.log(numbersColletion.data);