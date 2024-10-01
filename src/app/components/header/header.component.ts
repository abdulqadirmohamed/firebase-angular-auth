import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, DividerModule, MenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  items: MenuItem[] | undefined;

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

    this.items = [
      {
          label: 'Options',
          items: [
              {
                  label: 'Refresh',
                  icon: 'pi pi-refresh'
              },
              {
                  label: 'Export',
                  icon: 'pi pi-upload'
              }
          ]
      }
  ];

  }

  logout() {
    this.authService.logout().subscribe(() => {
      window.location.reload()
    });
  }
}
