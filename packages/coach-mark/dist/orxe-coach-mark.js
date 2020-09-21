var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './coach-mark-css';
import "@orxe-components/button";
import "@orxe-components/icons";
let OrxeCoachMark = class OrxeCoachMark extends LitElement {
    constructor() {
        super(...arguments);
        this.text = 'Here goes the content for the coach mark.';
    }
    closediv() {
        this.remove();
    }
    render() {
        return html `
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
};
OrxeCoachMark.styles = styles;
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], OrxeCoachMark.prototype, "text", void 0);
__decorate([
    property({}),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrxeCoachMark.prototype, "render", null);
OrxeCoachMark = __decorate([
    customElement('orxe-coach-mark')
], OrxeCoachMark);
export default OrxeCoachMark;
