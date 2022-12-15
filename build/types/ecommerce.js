"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List extends Array {
    constructor() {
        super();
        Object.setPrototypeOf(this, List.prototype); // for es5
    }
    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url) {
        const jsondata = await fetch(url);
        const data = await jsondata.json();
        if ("message" in data) {
            throw new Error(data.message);
        }
        this.push(data);
        return data;
    }
    /* complete the function sortList() with a parameter "order", which can be
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    sortList(order) {
        if (order === "asc") {
            this.sort((a, b) => a.id - b.id);
        }
        else {
            this.sort((a, b) => b.id - a.id);
        }
    }
    /* complete method push(), which overrides original "push" method. New item can be added to the array if
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    // push(...items: T[]): number {
    //     items.map(item => {
    //         if (this.find(original => original.id === item.id)) {
    //             throw Error("id is duplicated")
    //         }
    //     })
    //     this.push(...items)
    //     return 1
    // }
    push(...items) {
        function isItemExit(array, id) {
            return array.some(arrVal => id === arrVal.id);
        }
        if (items.map(newItem => isItemExit(this, newItem.id)).includes(true)) {
            return 0;
        }
        else {
            for (let i = 0; i < items.length; i++) {
                this[this.length] = items[i];
            }
            return 1;
        }
    }
}
exports.List = List;
