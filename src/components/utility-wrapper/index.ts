import { html, unsafeCSS, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from "./style.scss";

@customElement('utility-wrapper')
export class MyElement extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div><slot/></div>
    `
  }
}
