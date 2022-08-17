import { html, unsafeCSS, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './style.scss';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('counter-button')
export class MyElement extends LitElement {
  static styles = unsafeCSS(styles);
  // 複数指定したい場合は配列
  // static styles = [
  //   unsafeCSS(styles),
  //   css`
  //   :host {
  //     color: blue;
  //     text-align: center;
  //   }
  //   `
  // ]

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <p>${this.count}</p>

      <button @click=${this._onClick} part="button" id="button">
        <slot/>
      </button>
    `
  }

  private _onClick() {
    this.count++
  }

  foo(): string {
    return 'foo'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'counter-button': MyElement
  }
}
