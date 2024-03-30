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

  get(index) {
    if (index > this.length || index < 0) return undefined;

    let temp;

    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i <= index; i++) {
        temp = temp.next;
      }
    } else {
      if (index === this.length - 1) return this.tail;

      temp = this.tail;

      for (let i = this.length; i > index + 1; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }
}

export function testDoublyLinkedList() {
  const myLinkedList = new DoublyLinkedList(100);
  myLinkedList.push(200);
  myLinkedList.push(300);
  myLinkedList.push(400);
  myLinkedList.push(500);
  myLinkedList.push(600);
  myLinkedList.push(700);
  myLinkedList.push(800);

  console.log("my:", myLinkedList);
  console.log("get:", myLinkedList.get(4));
}
