import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subtitle-link',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './subtitle-link.component.html',
  styleUrl: './subtitle-link.component.css',
})
export class SubtitleLinkComponent {
  @Input() activePage: string = 'signin';
}
