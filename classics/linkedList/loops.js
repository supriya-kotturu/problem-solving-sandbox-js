import { LinkedList } from "./crud.js";

export class LinkedListLoop extends LinkedList {
  constructor() {
    super();
  }

  detectLoop() {
    // ----- FAST AND SLOW POINTERS -----
    // fast ptr moves 2X faster than slow ptr
    // if there is a loop, fast and slow ptr will eventually meet
    // else it reaches the last node with null

    let fastPtr = this.head;
    let slowPtr = this.head;

    while (slowPtr && fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      // found the loop
      if (slowPtr === fastPtr) return true;
    }

    return false;
  }

  removeLoop() {
    let slowPtr = this.head;
    let fastPtr = this.head;

    while (slowPtr && fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      // found the loop
      if (slowPtr === fastPtr) {
        // reset the fast pointer
        fastPtr = this.head;

        // itterate until the pointers meet
        // we increment the slow pointer to move till the fast pointer reaches it again

        // **NEXT** check the next vlaues match, since we need the address of them to delete it without losing current node
        while (slowPtr.next !== fastPtr.next) {
          slowPtr = slowPtr.next;
          fastPtr = fastPtr.next;
        }

        // slow pointer contains the node which makes the loop
        // setting it's next value to null, eleminates the loop
        slowPtr.next = null;
      }
    }

    return;
  }
}
