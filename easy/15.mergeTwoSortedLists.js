/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * LINK: https://leetcode.com/problems/merge-two-sorted-lists
 */

class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode(0);
  let temp = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  temp.next = list1 || list2;

  return dummy.next;
};

const l1 = new ListNode(1, null);
l1.next = new ListNode(2, null);
l1.next.next = new ListNode(4, null);
l1.next.next.next = new ListNode(6, null);
l1.next.next.next.next = new ListNode(8, null);

const l2 = new ListNode(1, null);
l2.next = new ListNode(2, null);
l2.next.next = new ListNode(3, null);
l2.next.next.next = new ListNode(4, null);
l2.next.next.next.next = new ListNode(5, null);

console.log(JSON.stringify(mergeTwoLists(l1, l2)));
