import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ToolbarComponent } from "./public/components/toolbar/toolbar.component";
import { SignInComponent } from './iam/components/sign-in/sign-in.component';
import { SignUpComponent } from './iam/components/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        RouterOutlet,
        HomeComponent,
        PageNotFoundComponent,
        ToolbarComponent,
        SignInComponent,
        SignUpComponent,
        CommonModule,
      
    ]
})
export class AppComponent implements OnInit {
  title = 'auth-roles';

  ngOnInit(): void {
    initFlowbite();
  }
}
