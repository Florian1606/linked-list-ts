import { Item } from "./Item";

class LinkedList {
    head: Item | undefined;
    size: number;

    constructor() {
        this.size = 0;
    }


    insertFirst(data: number) {
        this.head = new Item(data, this.head);
        this.size++;
    }


    insertLast(data: number) {
        let item = new Item(data);
        let current;


        if (!this.head) {
            this.head = item;
        } else {
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


export { LinkedList }