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

    // let pre = this.head;
    // let curr = this.head;

    // for (let i = 0; i < index; i++) {
    //   if (curr !== index) {
    //     pre = curr;
    //   }

    //   curr = curr.next;
    // }

    // pre.next = newNode;
    // newNode.next = curr;
    // return newNode.value;
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
}

export function testLinkedList() {
  const myLinkedList = new LinkedList(100);

  myLinkedList.push(200);
  myLinkedList.push(300);
  myLinkedList.push(400);

  //   console.log("myLinkedListPush:", myLinkedList);

  //   myLinkedList.pop();

  //   console.log(myLinkedList.shift());

  //   console.log("get:", myLinkedList.get(5));

  // myLinkedList.insert(1, 500);
  // myLinkedList.remove(1);

  myLinkedList.reverse();
  console.log("log:", myLinkedList);
  // myLinkedList.printList();

  //   console.log("list:", myLinkedList);
}
