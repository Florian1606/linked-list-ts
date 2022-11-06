"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Item_1 = require("./Item");
// Create/Get/Remove Items From Linked List
class LinkedList {
    constructor() {
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Item_1.Item(data, this.head);
        this.size++;
    }
    insertLast(data) {
        let item = new Item_1.Item(data);
        let current;
        if (!this.head) {
            this.head = item;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = item;
        }
        this.size++;
    }
    // Clear list
    clearList() {
        this.head = undefined;
        this.size = 0;
    }
    // Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map