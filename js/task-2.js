class Storage {
     #items;

     constructor(first){
          this.#items=first;
     }


     getItems () {
          return this.#items;
     }

     addItem(newItem) {
          this.#items.push(newItem);
     }

      removeItem(itemToRemove) {
    this.#items = this.#items.filter(i => i !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
