class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let curr = this.head;
    let index = 0;
    while (curr !== null) {
      console.log("index:", index, "value:", curr.value, "next: ", curr.next);
      curr = curr.next;
      index++;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    let curr = this.head;
    let pre;

    if (!this.head) {
      return undefined;
    }

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;

      console.log("popped:", curr.value);
      return curr;
    }

    while (curr.next !== null) {
      pre = curr;
      curr = curr.next;

      this.length--;
    }

    this.tail = pre;
    this.tail.next = null;
  }

  unshift(value) {
    if (!value) return undefined;

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      const shiftedEl = this.head;

      const newHead = this.head.next;
      this.head = newHead;

      return shiftedEl;
    }

    this.length--;
  }

  get(index) {
    let count = 0;
    let curr = this.head;
    if (index < count || index > this.length) return undefined;

    while (curr !== null) {
      if (count === index) {
        return curr;
      }

      count++;
      curr = curr.next;
    }
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return;
    }
    return undefined;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    let prev = this.get(index - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (!this.head) return undefined;

    let curr = this.get(index);
    const prev = this.get(index - 1);

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      prev.next = curr.next;
      curr = null;
    }

    this.length--;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = slow.next.next;
    }

    return slow;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }

    return false;
  }

  findKthFromEnd(k) {
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < k; i++) {
      if (fast === null) {
        console.log("log:", "Not found");
        return null;
      }

      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    console.log("found:", slow);
    return slow;
  }

  partitionList(x) {}

  reverseBetween(m, n) {
    // 1 -> 2 -> 3 -> 4 -> 5
    // 1, 3
    // 1 -> 4 -> 3 -> 2 -> 5

    // Check if the list is empty. If it is, no action is needed.
    if (this.head === null) return;

    // Create a dummy node. This is a common technique used in linked list problems
    // to simplify edge cases, like when modifying the head of the list.
    const dummy = new Node(0);

    // Link this dummy node to the head of the list.
    // Now, dummy acts as a precursor to the head node.
    dummy.next = this.head;

    // 'prev' will eventually point to the node just before the start of the reversal.
    // Initially, 'prev' is set to the dummy node.
    let prev = dummy;

    // Iterate to position 'prev' to the node just before where reversal begins.
    // Since indices are 0-based, this loop moves 'prev' 'm' nodes forward.
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    // 'current' points to the first node that will be reversed.
    // This is the mth node in the list (considering 0-based indexing).
    let current = prev.next;
    console.log("PREV}:", prev);
    console.log("CURRENT:", current);
    this.printList();

    // The loop for the actual reversal of the segment between m and n.
    // It runs (n - m) times, moving each node in turn to the position after 'prev'.
    for (let i = 0; i < n - m; i++) {
      // 'temp' temporarily stores the next node in line to be moved.

      const temp = current.next;
      console.log("temp:", temp);
      // Bypass 'temp' in the current positioning.

      current.next = temp.next;
      console.log("currentnext:", current.next);
      // Insert 'temp' between 'prev' and 'prev.next'.
      // This step effectively moves 'temp' to the front of the reversal segment.

      temp.next = prev.next;
      console.log("temp.next:", temp.next);

      prev.next = temp;
      console.log("prev:", temp);

      this.printList();
    }

    // Update the head of the list if the head was part of the reversal.
    // This is where the dummy node becomes useful, as it simplifies this operation.
    this.head = dummy.next;
  }
}

export function testLinkedList() {
  const myLinkedList = new LinkedList(100);

  myLinkedList.push(200);
  myLinkedList.push(300);
  myLinkedList.push(400);

  console.log("my:", myLinkedList);
}
