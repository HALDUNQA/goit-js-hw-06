class StringBuilder {
  #value;

  constructor(first) {
    this.#value = first;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
   const item=[str];
    return this.#value= item.concat(this.#value);
  }

  padEnd(str) {
    const item=[str];
   return this.#value=this.#value.concat(item);
  }

  padBoth(str) {
    return this.#value=StringBuilder.padStart + StringBuilder.padEnd; 

       
   
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


