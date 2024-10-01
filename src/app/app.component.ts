import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'firebase-angular-auth';

  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe(
      (user: { email: any; displayName: any }) => {
        if (user) {
          this.authService.currentUserSignal.set({
            email: user.email!,
            username: user.displayName!,
          });
        }else{
          this.authService.currentUserSignal.set(null)
        }
      }
    );
  }
}
