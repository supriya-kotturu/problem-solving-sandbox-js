/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and
 * each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * LINK: https://leetcode.com/problems/add-two-numbers
 */

import { LinkedList, Node } from "../classics/linkedList/crud.js";

const addTwoNumbers = (l1, l2) => {
  let res = new Node(-1);
  let currNode = res;
  let carry = 0,
    x = 0,
    y = 0,
    sum = 0;

  while (l1 || l2 || carry) {
    x = l1 ? l1.val : 0;
    y = l2 ? l2.val : 0;

    sum = carry + x + y;
    carry = Math.floor(sum / 10);

    currNode.next = new Node(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    currNode = currNode.next;
  }

  return res.next;
};

const num1 = new LinkedList();
const num2 = new LinkedList();

for (let idx = 0; idx < 7; idx++) num1.insert(9);
for (let idx = 0; idx < 4; idx++) num2.insert(9);

num1.print();
num2.print();

const sum = addTwoNumbers(num1.head, num2.head);
console.log(JSON.stringify(sum));
