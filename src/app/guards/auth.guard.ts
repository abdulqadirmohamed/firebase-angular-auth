import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.user$.pipe(
    map(user => {
      if (user) {
        router.navigate(['/']);
        return false; // User is authenticated, allow access
      } else {
        return true;
      }
    })
  );
};
