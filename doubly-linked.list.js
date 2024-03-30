class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
    }

    this.length--;
    return temp;
  }

  shift() {
    let temp = this.head;
    this.head = temp.next;
    this.head.prev = null;
    temp.next = null;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return newNode;
  }
}

export function testDoublyLinkedList() {
  const myLinkedList = new DoublyLinkedList(100);
  myLinkedList.push(200);
  myLinkedList.push(300);

  console.log("unshift:", myLinkedList.unshift(5));
  console.log("my:", myLinkedList);
}
