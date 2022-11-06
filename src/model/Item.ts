class Item {
    data: number;
    next: Item | undefined;

    public constructor (data: number, next? : Item) {
        this.data = data;
        this.next = next;
    }
}

export {Item};