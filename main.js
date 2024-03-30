import "./style.css";
import { testLinkedList } from "./linked-list";
import { testDoublyLinkedList } from "./doubly-linked.list";

document.querySelector("#app").innerHTML = `
  <div> </div>
`;

testDoublyLinkedList();
