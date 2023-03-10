// Problem #2: LinkedList

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removedNode = this.head;
    this.head = removedNode.next;

    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
    }

    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return;

    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let prevNode = this.get(index - 1);

    prevNode.next = removedNode.next;
    this.length--;

    return this;
  }
}

const newLinkedList = new SinglyLinkedList();
newLinkedList.push(3);
newLinkedList.push(33);
newLinkedList.push(39);
newLinkedList.shift();
newLinkedList.unshift(1);
newLinkedList.insert(1, 2);
newLinkedList.remove(1);

console.log(newLinkedList);
