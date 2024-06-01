import { LinkedList, Node } from "./crud.js";
import { LinkedListLoop } from "./loops.js";
import { LinkedListOps } from "./ops.js";

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

// ----- LINKED LIST - LOOPS -----
const sl_loop = new LinkedListLoop();

// // create a linked list with 1 - 6 range
// for (let idx = 1; idx <= 6; idx++) sl_loop.insert(idx);
// sl_loop.print();

// // add a loop to the linked list
// let lastNode = sl_loop.head;
// while (lastNode.next) lastNode = lastNode.next;
// lastNode.next = sl_loop.head.next.next.next;

// const hasLoop = sl_loop.detectLoop();
// console.log({ hasLoop });

// sl_loop.removeLoop();

// const hasLoopAfter = sl_loop.detectLoop();
// console.log({ hasLoopAfter });

// sl_loop.print();

// ----- LINKED LIST - ITERSECTION -----
const ll1 = new LinkedListLoop();
const ll2 = new LinkedListLoop();

// const intersectionNode = new Node(34);

// ll1.insert(1);
// ll1.insert(2);
// ll1.insert(3);
// ll1.head.next.next.next = intersectionNode;
// ll1.insert(4);
// ll1.insert(6);

// ll2.insert(10);
// ll2.insert(20);
// ll2.insert(30);
// ll2.head.next.next = intersectionNode;

// ll1.print();
// ll2.print();

// const iNode = ll1.findIntersection(ll2);
// console.log({ iNode });

// ----- LINKED LIST - REVERSE -----
const ll = new LinkedListOps();

// for (let idx = 1; idx < 6; idx++) ll.insert(idx);

// ll.print();
// ll.reverse();
// ll.print();

// ----- LINKED LIST - SORT -----
ll.insert(2);
ll.insert(16);
ll.insert(1);
ll.insert(7);
ll.insert(5);
ll.insert(3);
ll.print();

ll.sort();

ll.print();
