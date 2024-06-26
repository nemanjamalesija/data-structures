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

      for (let i = 0; i < index; i++) {
        console.log("temp:", temp);
        temp = temp.next;
      }
    } else {
      console.log("this.le:", this.length);
      if (index === this.length - 1) return this.tail;

      temp = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  insert(index, value) {
    let node = new Node(value);
    if (index === this.length) {
      console.log("index:", index);
      console.log("lenghth:", this.length);

      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;

      return this;
    } else {
      const currNode = this.get(index);
      let prev = currNode.prev;

      prev.next = node;
      node.prev = prev;
      node.next = currNode;
      currNode.prev = node;
    }

    this.length++;
    return this;
  }

  remove(index) {
    const node = this.get(index);
    let prev = node.prev;

    prev.next = node.next;
    node.next = prev;

    this.length--;
    return node;
  }

  printList() {
    let temp = this.head;

    for (let i = 0; i < this.length; i++) {
      console.log(i, "->", temp.value);
      temp = temp.next;
    }
  }

  reverse() {
    let temp = this.head; // 100
    this.head = this.tail; // 800
    this.tail = temp; // 100

    for (let i = this.length - 1; i > 0; i--) {
      // temp 100
      let before = temp.prev;
      temp.prev = temp.next;
      temp.next = before;
      temp = temp.prev;
    }
  }

  reverseFirstAndLast() {
    let temp = this.head;
    let prev;

    while (temp.next !== null) {
      temp = temp.next;
      prev = temp.prev;
    }

    let oldHead = this.head;

    this.head = temp;
    this.head.next = oldHead.next;

    this.tail = oldHead;
    this.tail.prev = prev;
    this.tail.next = null;

    prev.next = this.tail;
  }
}

export function testDoublyLinkedList() {
  //   const myLinkedList = new DoublyLinkedList(100);
  //   myLinkedList.push(200);
  //   myLinkedList.push(300);
  //   myLinkedList.push(400);
  //   myLinkedList.push(500);
  //   myLinkedList.push(600);
  //   myLinkedList.push(700);
  //   myLinkedList.push(800);

  //   //   console.log("get:", myLinkedList.get(4));

  //   myLinkedList.reverse();
  //   myLinkedList.printList();
  console.log("rem,:", 1 / 2);
}
