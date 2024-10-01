import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user: { email: any; displayName: any; }) => {
      if (user) {
        this.authService.currentUserSignal.set({
          email: user.email,
          username: user.displayName,
        });
        console.log(user.displayName)
        console.log(this.authService.currentUserSignal())
      } else {
        this.authService.currentUserSignal.set(null);
      }
    });
    
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('User logged out');
    });
  }
}
