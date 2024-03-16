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
    this.newNode = new Node(value);
    this.head = this.newNode;
    this.tail = this.newNode;
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
    let newNode = new Node(value);

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

    while (curr.next !== null) {
      pre = curr;
      curr = curr.next;

      console.log("curr:", curr);
      console.log("pre:", pre);
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    return this;
  }
}

export function test() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);

  myLinkedList.pop();
  myLinkedList.printList();
  // (2) Items in LL - Returns 2 Node
  //   if (myLinkedList.length !== 0) {
  //     console.log(myLinkedList.pop().value);
  //   } else {
  //     console.log("null");
  //   }

  //   // (1) Item in LL - Returns 1 Node
  //   if (myLinkedList.length !== 0) {
  //     console.log(myLinkedList.pop().value);
  //   } else {
  //     console.log("null");
  //   }

  //   // (0) Items in LL - Returns null
  //   if (myLinkedList.length !== 0) {
  //     console.log(myLinkedList.pop().value);
  //   } else {
  //     console.log("null");
  //   }
}

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
