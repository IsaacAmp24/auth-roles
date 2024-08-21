import { CommonModule } from '@angular/common'; // obligatory for standalone components
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class ToolbarComponent {
  options = [
    {path: '/home', title: 'Home'},
    {path: '/sign-in', title: 'Sign In'},
    {path: '/sign-up', title: 'Sign Up'}
  ];
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}