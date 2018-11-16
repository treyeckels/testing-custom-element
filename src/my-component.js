class MyComponent extends HTMLElement {
  // Element class can define custom element reactions
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = "I'm a custom element!";
    console.log("my-element created!");
  }

  // ready() {
  //   super.ready();
  //   console.log("my-element is ready!");
  // }
}

console.log("working!");

// Associate the new class with an element name
customElements.define("my-component", MyComponent);
