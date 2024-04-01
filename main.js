import "./style.css";
import { testLinkedList } from "./linked-list";
import { testDoublyLinkedList } from "./doubly-linked.list";

document.querySelector("#app").innerHTML = `
  <div> </div>
`;

// testDoublyLinkedList();

function addBinary(a, b) {
  let result = a + b;
  let binary = "";
  let remainder;

  while (result / 2 > 0) {
    remainder = result % 2;

    binary += remainder;
    result = Math.floor(result / 2);
  }

  return binary.split("").reverse().join("");
}

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  // while (j >= 0) {
  //   if (i >= 0 && nums1[i] > nums2[j]) {
  //     console.log("k:", k);
  //     console.log("j:", j);
  //     console.log("i:", i);
  //     console.log(nums1[i] + " bigger than", nums2[j]);

  //     nums1[k--] = nums1[i--];
  //     console.log("nums1 first if:", nums1);
  //     console.log("decrementing i:");
  //   } else {
  //     console.log("k:", k);
  //     console.log("j:", j);
  //     console.log("i:", i);
  //     console.log(nums1[i] + " smaller or equal than", nums2[j]);

  //     nums1[k--] = nums2[j--];
  //     console.log("nums1 second if:", nums1);
  //     console.log("decrementing j:");
  //   }
  // }

  console.log("nums1:", nums1);
}

merge([2, 5, 9, 10, 0, 0, 0], 4, [1, 3, 5, 6], 4);
