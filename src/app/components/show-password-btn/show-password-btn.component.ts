import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-password-btn',
  standalone: true,
  imports: [NgIf],
  templateUrl: './show-password-btn.component.html',
  styleUrl: './show-password-btn.component.css',
})
export class ShowPasswordBtnComponent {
  @Input() isShowPassword: boolean = false;
  @Output() onShow: EventEmitter<any> = new EventEmitter();

  onPasswordShow() {
    this.onShow.emit();
  }
}
