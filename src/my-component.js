// Import PolymerElement class
// import { PolymerElement } from "@polymer/polymer/polymer-element.js";
// define the element's class element
class MyComponent2 extends HTMLElement {
  // Element class can define custom element reactions
  connectedCallback() {
    this.textContent = "I'm a custom element!";
    console.log("my-element created!");
  }

  // ready() {
  //   super.ready();
  //   console.log("my-element is ready!");
  // }
}

console.log("working!");

// Associate the new class with an element name
customElements.define("my-component2", MyComponent2);
