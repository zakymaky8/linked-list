import { Node } from "./node.mjs";
// const { Node } = require('./node')

const LinkedList = class {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    at(index) {
        if (!this.head)
            return undefined;

        else {
            let current = this.head;
            for (let i=0; i<index; i++) {
               if (current.next) 
                current = current.next
            else {
                return  undefined
            }
            }
            return current;
        }
    }

    pop() {
        if (this.size <=1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        else {
            this.at(this.size-2).next = null;
            this.tail = this.at(this.size-2);
            this.size--
        }
    }
    contains(value) {
        if (!this.head) {
            return false;
        }
        else {
            let current = this.head;
            for (let i=0; i < this.size; i++) {
                if (current.data==value) {
                    return true;
                } else if (current.next === null) {
                    return false
                }
                current = current.next;
            }
        }
    }
    find(val) {
        if (!this.head) {
            return null;
        }
        else {
            let current = this.head;
            for (let i=0; i < this.size; i++) {
                if (current.data==val) {
                    return i;
                } else if (current.next === null) {
                    return null
                }
                current = current.next;
            }
        }
    }
    toString() {
        if (!this.head) return null
        let str = '';
        let current = this.head;
        for (let i=0; i<this.size; i++) {
            if (current.next) str += `(${current.data}) -> `
            else str += `(${current.data}) -> null`
            current = current.next
        }
        return str
    }

    insertAt(val, ind) {
        const newNode = new Node(val);
        if (!this.head && ind===0) {
            this.head = newNode;
            this.size++
        }
        else if (ind >= this.size) {
            return 'no index: ' + ind;
        }
        else {
            if (ind===0)  {
                newNode.next = this.at(ind)
                this.head = newNode;
                this.size++
            }
            else {
                newNode.next = this.at(ind)
                this.at(ind-1).next = newNode
                this.size ++ 
            }

        }
    }
    removeAt(ind) {
        if (this.size===0 || ind>=this.size) return 'no data indexed: ' + ind
        else if (ind===0) { 
            this.head = this.head.next
            this.size--
        } else {
            this.at(ind-1).next = this.at(ind).next
            this.size--
        }
    }
}

export { LinkedList }