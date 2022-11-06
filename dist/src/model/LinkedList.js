import { Item } from "./Item";
// Create/Get/Remove Items From Linked List
class LinkedList {
    constructor() {
        this.size = 0;
    }
    // Insert first Item
    insertFirst(data) {
        this.head = new Item(data, this.head);
        this.size++;
    }
    // // Insert last Item
    // insertLast(data) {
    //     let item = new Item(data);
    //     let current;
    //     // If empty, make head
    //     if (!this.head) {
    //         this.head = item;
    //     } else {
    //         current = this.head;
    //         while (current.next) {
    //             current = current.next;
    //         }
    //         current.next = item;
    //     }
    //     this.size++;
    // }
    // // Insert at index
    // insertAt(data, index) {
    //     //  If index is out of range
    //     if (index > 0 && index > this.size) {
    //         return;
    //     }
    //     // If first index
    //     if (index === 0) {
    //         this.insertFirst(data);
    //         return;
    //     }
    //     const item = new Item(data);
    //     let current, previous;
    //     // Set current to first
    //     current = this.head;
    //     let count = 0;
    //     while (count < index) {
    //         previous = current; // Item before index
    //         count++;
    //         current = current.next; // Item after index
    //     }
    //     item.next = current;
    //     previous.next = Item;
    //     this.size++;
    // }
    // Get at index
    // getAt(index) {
    //     let current = this.head;
    //     let count = 0;
    //     while (current) {
    //         if (count == index) {
    //             console.log(current.data);
    //         }
    //         count++;
    //         current = current.next;
    //     }
    //     return null;
    // }
    // Remove at index
    // removeAt(index) {
    //     if (index > 0 && index > this.size) {
    //         return;
    //     }
    //     let current = this.head;
    //     let previous;
    //     let count = 0;
    //     Remove first
    //     if (index === 0) {
    //         this.head = current.next;
    //     } else {
    //         while (count < index) {
    //             count++;
    //             previous = current;
    //             current = current.next;
    //         }
    //         previous.next = current.next;
    //     }
    //     this.size--;
    // }
    // Clear list
    // clearList() {
    //     this.head = null;
    //     this.size = 0;
    // }
    // Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
export { LinkedList };
