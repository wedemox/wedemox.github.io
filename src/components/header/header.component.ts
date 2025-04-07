import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  mainList = [
    {name: 'About', routerlink:'About'},
    {name: 'Services', routerlink:'Services'},
    {name: 'Our Projects', routerlink:'ourproject'},
    {name: 'Our Team', routerlink:'ourteam'},
    {name: 'Contact', routerlink:'contact'}
  ];

}
