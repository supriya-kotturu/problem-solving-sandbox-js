/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * LINK: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */

import { LinkedList } from "../classics/linkedList/crud.js";

export const removeNthNodeFromEnd = (head, n) => {
  let slow = head,
    fast = head;

  // Move the fast pointer n steps ahead
  while (n) {
    fast = fast.next;
    n--;
  }

  // if the fast pointer is null, it means we need to remove the first node
  if (!fast) return head.next;

  // Move the slow pointer to the previous node of fast pointer
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node from the end of the list
  slow.next = slow?.next?.next || null;

  return head;
};

const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.print();

removeNthNodeFromEnd(ll.head, 2);
ll.print();
