import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-link',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './auth-link.component.html',
  styleUrl: './auth-link.component.css',
})
export class AuthLinkComponent {
  @Input() activePage: string = 'signin';
}
