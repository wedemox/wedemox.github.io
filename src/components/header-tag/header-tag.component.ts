import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-tag.component.html',
  styleUrl: './header-tag.component.scss'
})
export class HeaderTagComponent {
  headTitle:string=`BUSINESS 
  <span class="soft-highlight">CHALLENGES</span>? <br>
  WE'VE GOT YOU.`
}
