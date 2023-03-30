class Queue {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento a la cola
  enqueue(element) {
    this.items.push(element);
  }

  // Eliminar el primer elemento de la cola y devolverlo
  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items.shift();
  }

  // Devuelve el primer elemento de la cola sin eliminarlo
  front() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items[0];
  }

  // Devuelve si la cola está vacía o no
  isEmpty() {
    return this.items.length === 0;
  }

  // Devuelve el tamaño de la cola
  size() {
    return this.items.length;
  }

  // Vacía la cola
  clear() {
    this.items = [];
  }

  // Devuelve la cola en formato string
  toString() {
    return this.items.toString();
  }
}


function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value);
  if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
  }
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value);
  if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
  }
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
      return null;
  } else {
      let value = this.head.value;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.previous = null;
      }
      return value;
  }
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
      return null;
  } else {
      let value = this.tail.value;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.previous;
          this.tail.next = null;
      }
      return value;
  }
}
function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value);
  if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
  }
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value);
  if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
  } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
  }
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
      return null;
  } else {
      let value = this.head.value;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.previous = null;
      }
      return value;
  }
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
      return null;
  } else {
      let value = this.tail.value;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.previous;
          this.tail.next = null;
      }
      return value;
  }
}

LinkedList.prototype.search = function(value) {
  let currentNode = this.head;
  while (currentNode) {
      if (typeof value === "function") {
          if (value(currentNode.value)) {
              return currentNode.value;
          }
      } else {
          if (currentNode.value === value) {
              return currentNode.value;
          }
      }
      currentNode = currentNode.next;
  }
  return null;
}

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
  }
}