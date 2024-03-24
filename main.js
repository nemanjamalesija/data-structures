import "./style.css";
import { testLinkedList } from "./linked-list";

document.querySelector("#app").innerHTML = `
  <div> </div>
`;

// testLinkedList();

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
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  partitionList(x) {
    if (!this.head) return null;
    if (this.length === 1) return this;

    let lowChain = { length: 0 };
    let highChain = { length: 0 };
    let curr = this.head;
    let high;
    let low;
    let count = 0;

    while (curr !== null) {
      if (curr.value >= x) {
        high = new Node(curr.value);
        if (!highChain.head) {
          highChain.head = high;
        } else {
          high = highChain.head;
          while (high.next !== null) {
            high = high.next;
          }

          high.next = new Node(curr.value);
          highChain.tail = new Node(curr.value);
        }

        highChain.length++;
      }

      if (curr.value < x) {
        low = new Node(curr.value);

        if (!lowChain.head) {
          lowChain.head = low;
          console.log("set head:", lowChain);
        } else {
          low = lowChain.head;
          while (low.next !== null) {
            low = low.next;
          }

          low.next = new Node(curr.value);
          console.log("final chain:", lowChain);
        }

        lowChain.length++;

        count++;
      }

      curr = curr.next;
    }

    if (!lowChain.head) {
      this.head = highChain.head;
      this.tail = highChain.tail;
      return this;
    }

    if (!highChain.head) {
      this.head = lowChain.head;

      return this;
    }

    let temp = lowChain.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = highChain.head;
    this.head = lowChain.head;
    this.tail = highChain.tail;
    this.length = lowChain.length + highChain.length;
    return this;
  }
}

function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}
// 3 -> 8 -> 5 -> 10 -> 2 -> 1
const list = createListFromArray([4, 2, 6, 1, 3]);

console.log(list.partitionList(7));

list.printList();
