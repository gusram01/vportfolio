const insertContent = () => {
  const pre = document.getElementById('coding-text') as HTMLPreElement;
  pre.innerHTML = `
  <var>const</var> Node = require('./Node');
  
  // SinglYLinkedList class
  function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // "methods" for SinglYLinkedList class
  LinkedList.prototype.append = function (value) {
    <var>const</var> newNode = new Node(value);
  
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  
    this.length += 1;
  };
  
  LinkedList.prototype.prepend = function (value) {
    <var>const</var> aux = this.head;
    <var>const</var> newNode = new Node(value);
    this.head = newNode;
    this.head.next = aux;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length += 1;
  };
  
  LinkedList.prototype.print = function () {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  };
  
  LinkedList.prototype.currIndex = function (index) {
    let curr = this.head;
    let counter = 1;
    while (counter < index - 1) {
      curr = curr.next;
      counter += 1;
    }
    return curr;
  };
  
  LinkedList.prototype.insert = function (index, value) {
    this.length += 1;
    if (index > this.length) {
      this.append(value);
      return;
    }
    if (index === 1) {
      this.prepend(value);
      return;
    }
    <var>const</var> newNode = new Node(value);
    <var>const</var> curr = this.currIndex(index);
  
    newNode.next = curr.next;
    curr.next = newNode;
  };
  
  LinkedList.prototype.remove = function (index) {
    if (index > this.length) {
      return;
    }
    this.length -= 1;
    if (index === 1) {
      this.head = this.head.next;
      return;
    }
    <var>const</var> curr = this.currIndex(index);
  
    curr.next = curr.next.next;
  };
  
  /** Instanciated */
  <var>const</var> newLinkedList = new LinkedList();
  newLinkedList.prepend(3);
  newLinkedList.append(6);
  newLinkedList.append(5);
  newLinkedList.append(1);
  newLinkedList.append(8);
  newLinkedList.append(2);
  newLinkedList.append(7);
  
  console.log(&#96;Length: &#36;{newLinkedList.length}&#96;);
  
  newLinkedList.insert(4, 4);
  
  console.log(&#96;Length: &#36;{newLinkedList.length}&#96;);
  
  newLinkedList.remove(1);
  newLinkedList.print();
  
  console.log(&#96;Length: &#36;{newLinkedList.length}&#96;);
  module.exports = LinkedList;
  `;
};

export { insertContent };
