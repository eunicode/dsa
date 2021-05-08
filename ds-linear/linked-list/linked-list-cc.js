/*
Web Navigator

addToHead()
addToTail()
removeHead()
printList()
findNodeIteratively()
findNodeRecursively()
*/

/* -------------------------------------------------------------- */
// const Node = require('./Node');

/* -------------------------------------------------------------- */
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head; // Initialize tail to head

    // If linked list is empty, create head
    if (!tail) {
      this.head = new Node(data);
    }
    // Start at head and travel to last node, and add new tail
    else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) {
      return;
    }

    // The new head is old head's next node
    if (removedHead.next) {
      this.head = removedHead.next;
    }

    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';

    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }

    output += `<tail>`;
    console.log(output);
  }

  // Optional
  findNodeIteratively(data) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  // Optional
  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }
}

module.exports = LinkedList;
