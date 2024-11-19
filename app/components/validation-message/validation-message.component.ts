import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  template: `
    <div *ngIf="control && control.errors && (control.touched || control.dirty)">
      <div *ngFor="let error of errorMessages">
        {{ error }}
      </div>
    </div>
  `,
  styles: [
    `
      div {
        color: red;
        font-size: 0.9em;
      }
    `,
  ],
})
export class ValidationMessageComponent {
  @Input() control!: AbstractControl | null;
  @Input() customMessages: { [key: string]: string } = {};

  get errorMessages(): string[] {
    if (!this.control || !this.control.errors) {
      return [];
    }
    const messages: string[] = [];
    for (const errorKey in this.control.errors) {
      if (this.customMessages[errorKey]) {
        messages.push(this.customMessages[errorKey]);
      } else {
        messages.push(`Error: ${errorKey}`);
      }
    }
    return messages;
  }
}
