import { html, customElement, LitElement, property } from 'lit-element';
import styles from './coach-mark-css';
import "@orxe-components/button";
import "@orxe-components/icons";


@customElement('orxe-coach-mark')
export default class OrxeCoachMark extends LitElement {
  /**
   * Implement `render` to define a template for Coachmark.
   */
  @property({ type:String })
  text= 'Here goes the content for the coach mark.'
 
  closediv(){
    this.remove();
  }

  @property({})
  render() {
    return html`
      <div id="container">
        <div class="supporting-visual"></div>
          <div class="coachmark">
            <label>Title</label>
            <orxe-icon class="button-icon" icon="ic-close" aria-label="close the icon" @click=${this.closediv}></orxe-icon>
            <div class="coach-text">${this.text}</div>
          </div> 
      </div>
    `;
  }
  /**
   *  Getting styles from components custom scss file
   */
  
  static styles = styles;
}
