/* 
'JavaScript Data Structures and Algorithms' by Sammie Bae
https://github.com/Apress/js-data-structures-and-algorithms/blob/master/Chapter13(LL).js
*/

// NODE
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

// LINKED LIST
function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

/* -------------------------------------------------------------- */
// CHECK IF EMPTY
SinglyLinkedList.prototype.isEmpty = function() {
  return this.size == 0;
};

/* -------------------------------------------------------------- */
// ADD NODE TO HEAD
// Time complexity O(1)

SinglyLinkedList.prototype.insert = function(value) {
  if (this.head === null) {
    //If the node we're adding is the first node, it becomes the head
    this.head = new SinglyLinkedListNode(value);
  } else {
    var temp = this.head; // Store reference to old head
    this.head = new SinglyLinkedListNode(value); // Create new head
    this.head.next = temp; // Link new head to old head
  }

  this.size++;
};

/* -------------------------------------------------------------- */
// TEST
var sll1 = new SinglyLinkedList();

sll1.insert(1); // linked list is now: 1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null

/* -------------------------------------------------------------- */
// DELETE NODE BY VALUE 
// Time complexity O(N)

SinglyLinkedList.prototype.remove = function(value) {
  var currentHead = this.head;

  // If head has the target value
  if (currentHead.data == value) {
    // Just shift the head over. The next node is the new head.
    this.head = currentHead.next;
    this.size--;
  } else {
    var prev = currentHead; // Initialize `prev` to head

    while (currentHead.next) { // traverse list starting from head
      // If we find node
      if (currentHead.data == value) {
        // Remove node by skipping "middle" node
        prev.next = currentHead.next; // Set previous's next to current's next
        
        // Update `prev` and `currentHead` (eg i++)
        prev = currentHead;  
        currentHead = currentHead.next; 
        break; // break out of the loop
      }

      // If we don't find node, just update `prev` and `currentHead`
      prev = currentHead; // 
      currentHead = currentHead.next; 
    }

    // If node wasn't found in the middle or head, it must be tail
    // We finished traversing tail. 
    // `currentHead` points to last node
    // `prev` points to second-to-last node
    if (currentHead.data == value) {
      prev.next = null; // We cut off tail
    }

    this.size--;
  }
};

/* -------------------------------------------------------------- */
var sll2 = new SinglyLinkedList();

sll1.insert(1); // linked list is now:  1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null

sll1.remove(12); // linked list is now: 20 -> 1 -> null
sll1.remove(20); // linked list is now: 1 -> null

/* -------------------------------------------------------------- */
// REMOVE HEAD

SinglyLinkedList.prototype.deleteAtHead = function() {
  var toReturn = null;

  // If head exists
  if (this.head !== null) {
    toReturn = this.head.data; // store head's data
    this.head = this.head.next; // Set new head
    this.size--;
  }
  // }
  return toReturn;
};

/* -------------------------------------------------------------- */
// TEST
var sll3 = new SinglyLinkedList();

sll1.insert(1); // linked list is now:  1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null

sll1.deleteAtHead(); // linked list is now:  12 -> 1 -> null

/* =================================================================  

================================================================= */
