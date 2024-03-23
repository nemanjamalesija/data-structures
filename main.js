import "./style.css";
import { testLinkedList } from "./linked-list";

document.querySelector("#app").innerHTML = `
  <div> </div>
`;

// testLinkedList();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   printList() {
//     let temp = this.head;
//     while (temp !== null) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }

//   getHead() {
//     if (this.head === null) {
//       console.log("Head: null");
//     } else {
//       console.log("Head: " + this.head.value);
//     }
//   }

//   getTail() {
//     if (this.tail === null) {
//       console.log("Tail: null");
//     } else {
//       console.log("Tail: " + this.tail.value);
//     }
//   }

//   makeEmpty() {
//     this.head = null;
//     this.tail = null;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   findMiddleNode() {
//     let slow = this.head;
//     let fast = this.head;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = slow.next.next;
//     }

//     return slow;
//   }

//   hasLoop() {
//     let slow = this.head;
//     let fast = this.head;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;

//       if (slow === fast) return true;
//     }

//     return false;
//   }
// }

// let myLinkedList = new LinkedList(1);
// myLinkedList.push(2);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.push(5);

// console.log("Original list:");
// myLinkedList.printList();

// const hasLoopResult = myLinkedList.hasLoop();
// console.log(`\nHas loop? ${hasLoopResult}`);

// // Create a loop for testing purposes
// myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

// const hasLoopResultAfterLoop = myLinkedList.hasLoop();
// console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);

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
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
  }

  findKthFromEnd(k) {
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null;
      }

      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}
