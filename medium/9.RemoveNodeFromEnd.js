/**Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * LINK: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const removeNthFromEnd = (head, n) => {
  let curr = head;
  (prev = null), (length = 0);

  while (curr) {
    curr = curr.next;
    length++;
  }

  length = length - n;
  curr = head;

  while (length) {
    prev = curr;
    curr = curr.next;
    length--;
  }

  if (curr === head) return (head = head.next || null);
  else prev.next = curr.next;

  return head;
};

const ll = new ListNode(1, null);
ll.next = new ListNode(2, null);
ll.next.next = new ListNode(3, null);
ll.next.next.next = new ListNode(4, null);
ll.next.next.next.next = new ListNode(5, null);

console.log(JSON.stringify(removeNthFromEnd(ll, 2)));
