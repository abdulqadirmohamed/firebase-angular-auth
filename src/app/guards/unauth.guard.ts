import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const unauthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.user$.pipe(
    map(user => {
      if (user) {
        // If user is authenticated, redirect to the main app
        router.navigate(['/']); 
        return false; // Prevent access to login/register
      } else {
        // Allow access to login/register pages
        return true;
      }
    })
  );
};
