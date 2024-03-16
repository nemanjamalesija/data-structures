// WRITE NODE CLASS HERE //

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // WRITE LL CONSTRUCTOR HERE //
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log("el:", temp.value, "next: ", temp.next);
      temp = temp.next;
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
}

export function testLinkedList() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(10);
  console.log("list push 10:", myLinkedList);
  myLinkedList.push(20);
  console.log("list push 20:", myLinkedList);
  myLinkedList.push(30);
  console.log("list push 30:", myLinkedList);

  myLinkedList.pop();
  myLinkedList.printList();
}
