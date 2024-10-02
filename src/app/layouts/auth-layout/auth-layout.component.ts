import { Component } from '@angular/core';
import { LoginComponent } from "../../components/login/login.component";
import { MainLayoutComponent } from "../main-layout/main-layout.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [LoginComponent, MainLayoutComponent, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
