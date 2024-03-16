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

    while (this.head !== null) {
      if (count === index) {
        return this.head;
      }

      count++;

      curr = this.head.next;

      console.log("log:", this.head);
    }
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}

export function testLinkedList() {
  const myLinkedList = new LinkedList(1);

  myLinkedList.push(20);
  myLinkedList.push(30);
  myLinkedList.push(40);
  myLinkedList.push(50);
  //   console.log("myLinkedListPush:", myLinkedList);

  //   myLinkedList.pop();

  //   console.log(myLinkedList.shift());
  myLinkedList.get(1);
  myLinkedList.set(1, 10);
  myLinkedList.printList();
}
