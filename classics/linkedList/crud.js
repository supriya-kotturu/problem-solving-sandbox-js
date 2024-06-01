// create a Node Class
export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.length = -1;
  }
}

// create a LinkedList Class
export class LinkedList {
  constructor() {
    this.head = null;
    this.length = -1;
  }

  // ----- INSERT -----
  // add the val at the end of the list;
  insert(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    let lastNode = this.head;

    while (lastNode.next) lastNode = lastNode.next;
    lastNode.next = newNode;
    this.length++;

    return;
  }

  // add the val at the beginning of the list;
  append(val) {
    const newNode = new Node(val);

    let currentNode = this.head;

    if (!currentNode) this.head = newNode;
    else {
      newNode.next = currentNode;
      this.head = newNode;
    }

    this.length++;
    return;
  }

  // instert at a specific position
  insertAt(val, pos) {
    const newNode = new Node(val);

    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode && count < pos) {
      currentNode = currentNode.next;
      count++;
    }

    if (!currentNode) {
      throw new Error(
        "Position specified is greater than the length of the LL."
      );
    } else {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.length++;
    return;
  }

  // print the val
  print() {
    let currentNode = this.head;
    const ll = [];

    if (!currentNode) console.log("Empty List");

    while (currentNode) {
      ll.push(currentNode.val);
      currentNode = currentNode.next;
    }

    console.log(ll, ll.length);
    return;
  }

  // ----- UPDATE -----
  // update the val at a specific position
  replace(newVal, pos) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode.next && count < pos) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.val = newVal;
  }

  // ----- DELETE -----
  // delete the val in the list
  delete(val) {
    let currentNode = this.head;
    let prevNode = null;

    // if the list is empty
    if (this.length < 0) throw new Error("Empty List");

    // if the value is at the start of the list
    if (currentNode && currentNode.val === val) {
      this.head = currentNode.next;
      return;
    }

    // if the value is not at the start of the list
    while (currentNode && currentNode.val !== val) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!currentNode) throw new Error("Value not found");

    prevNode.next = currentNode.next;
    this.length--;
    return;
  }
}
