var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyComp = class MyComp extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.age = '';
    }
    render() {
        return html `
       <input type="text" name="input-text" @input=${this.updateName} placeholder="enter some text here..."></input>
       <button @click=${this.search}>Search</button>
       <label>${this.age}</label>
     `;
    }
    updateName(e) {
        const input = e.target;
        this.name = input.value;
    }
    search() {
        fetch('https://api.agify.io/?name=' + this.name)
            .then((response) => {
            return response.json();
        })
            .then((result) => {
            this.age = result.age;
            this.dispatchEvent(new CustomEvent('myage', {
                detail: { ages: result.age },
                bubbles: true,
                composed: true
            }));
        });
    }
};
MyComp.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
__decorate([
    property({ type: String })
], MyComp.prototype, "name", void 0);
__decorate([
    property({ type: String })
], MyComp.prototype, "age", void 0);
MyComp = __decorate([
    customElement('my-comp')
], MyComp);
export { MyComp };
//# sourceMappingURL=my-comp.js.map