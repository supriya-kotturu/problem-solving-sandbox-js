import { LinkedListLoop } from "./loops.js";

export class LinkedListOps extends LinkedListLoop {
  // ----- REVERSE -----
  reverse() {
    let prevNode = null;
    let nextNode = null;
    let currentNode = this.head;

    while (currentNode) {
      nextNode = currentNode.nextNode;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }

  // ----- SPLIT -----
  getMiddleNode(head) {
    if (!head) return head;

    let slowPtr = head;
    let fastPtrt = head;

    while (fastPtrt.next && fastPtrt.next.next) {
      slowPtr = slowPtr.next;
      fastPtrt = fastPtrt.next.next;
    }

    // after the iteration, slowPtr will be at the middle node
    return slowPtr;
  }

  // ----- MERGE -----
  merge(left, right) {
    let result = null;

    if (!left) return right;
    if (!right) return left;

    if (left.val <= right.val) {
      result = left;
      result.next = this.merge(left.next, right);
    } else {
      result = right;
      result.next = this.merge(left, right.next);
    }

    return result;
  }

  // ----- MERGE SORT -----
  mergeSort(head) {
    // base condition
    if (!head || !head.next) return head;

    // get the middle node
    const middleNode = this.getMiddleNode(head);

    // split the list into two halves
    const rightHalf = middleNode.next;
    middleNode.next = null;
    const leftHalf = head;

    // apply merge sort to both halves
    const left = this.mergeSort(leftHalf);
    const right = this.mergeSort(rightHalf);

    // merge both halves
    const result = this.merge(left, right);

    return result;
  }

  // ----- SORT - WRAPPER THAT MANIPULATES THE HEAD -----
  sort() {
    this.head = this.mergeSort(this.head);
  }
}
