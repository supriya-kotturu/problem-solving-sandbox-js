import { LinkedList } from "./crud.js";
import { LinkedListLoop } from "./loops.js";

// ----- LINKED LIST - CRUD -----
const sl = new LinkedList();

// // basic oprtations -  INSERT, UPDATE, DELETE
// sl.print();
// console.log("---");
// sl.append(23);
// sl.print();
// console.log("---");
// sl.append(54);
// sl.print();
// console.log("---");
// sl.insert(89);
// sl.print();
// console.log("---");
// sl.insert(20);
// sl.print();
// console.log("---");
// sl.insertAt(77, 3);
// sl.print();
// console.log("---");
// sl.replace(0, 2);
// sl.print();
// console.log("---");
// sl.delete(20);
// sl.print();
// console.log("---");

// ----- LINKED LIST - LOOOPS -----
const sl_loop = new LinkedListLoop();

// create a linked list with 1 - 6 range
for (let idx = 1; idx <= 6; idx++) sl_loop.insert(idx);
sl_loop.print();

// add a loop to the linked list
let lastNode = sl_loop.head;
while (lastNode.next) lastNode = lastNode.next;
lastNode.next = sl_loop.head.next.next.next;

const hasLoop = sl_loop.detectLoop();
console.log({ hasLoop });

sl_loop.removeLoop();

const hasLoopAfter = sl_loop.detectLoop();
console.log({ hasLoopAfter });

sl_loop.print();
