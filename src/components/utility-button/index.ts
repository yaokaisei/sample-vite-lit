import { html, unsafeCSS, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import {classMap} from 'lit/directives/class-map.js';
import styles from "./style.scss";

@customElement('utility-button')
export class CustomElement extends LitElement {
  static styles = unsafeCSS(styles);

    @property()
    size!: string;

    setClass() {
      switch (this.size) {
        case 'regular':
          return { regular: true, large: false, small: false };
        case 'large':
          return { regular: false, large: true, small: false };
        case 'small':
          return { regular: false, large: false, small: true };
        default:
          return { regular: false, large: false, small: false };
      }
    }

    render(){
        return html `
          <button
            class=${classMap(this.setClass())}
          >
            ${this.size}ボタン:<slot></slot>
          </button>
        `
    }
}
