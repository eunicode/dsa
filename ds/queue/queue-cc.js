/* =================================================================  

================================================================= */

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }

  enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
  }

  dequeue() {
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
    return data;
  }
}

/* =================================================================  

================================================================= */
/*
Bounded queue
Avoid underflow
Avoid overflow */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('Next node must be a member of the Node class');
    }

    this.next = node;
  }

  setNext(data) {
    this.next = data;
  }

  getNextNode() {
    return this.next;
  }
}

/* -------------------------------------------------------------- */
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const nextNode = new Node(data);
    const currentHead = this.head;
    this.head = nextNode;

    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    const lastNode = this.head;

    if (!lastNode) {
      this.head = new Node(data); // If head doesn't exist, new node is head
    } else {
      let temp = this.head; // Start at head

      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode(); // Travel to last node
      }

      temp.setNextNode(new Node(data)); // Link last node to new tail
    }
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) {
      return;
    }

    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';

    while (currentNode !== null) {
      output += `${currentNode.data} `;
      currentNode = currentNode.next;
    }

    output = output.concat('<tail>');
    console.log(output);
  }
}

/* -------------------------------------------------------------- */
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`); // optional
    } else {
      throw new Error('Queue is full!');
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      ); // optional
      return data;
    } else {
      throw new Error('Queue is empty!');
    }
  }
}

/* -------------------------------------------------------------- */
const boundedQueue = new Queue(3);

boundedQueue.enqueue(1);
boundedQueue.enqueue(2);
boundedQueue.enqueue(3);

boundedQueue.dequeue();
boundedQueue.dequeue();
boundedQueue.dequeue();
