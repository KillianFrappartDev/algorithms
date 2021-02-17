/**
 * LinkedList implementation.
 */
class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = null;
  }

  append(value) {
    if (!this.tail) {
      this.tail = { value, next: null };
      this.head.next = this.tail;
    } else {
      this.tail.next = { value, next: null };
      this.tail = this.tail.next;
    }
  }

  display() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list);
  }
}

const linked = new LinkedList(1);
linked.append(2);
linked.append(3);
linked.append(4);
linked.append(5);
linked.display();

/**
 * Reverse a linked list.
 *
 * Time Complexity: ?
 *
 * @param {Object} head The head of the list
 * @return {Object} The new head
 */
const reverseLinked = list => {
  let before = null;
  let current = list.head;
  let after = current.next;
  while (after) {
    current.next = before;
    [before, current, after] = [current, after, after.next];
  }
  current.next = before;
  list.head = current;

  return list;
};

reverseLinked(linked).display();
