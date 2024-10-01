import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { authGuard } from './guards/auth.guard';
import { unauthGuard } from './guards/unauth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [authGuard], // Protect the main app component
      },
    {
        path:'login',
        component: LoginComponent,
        canActivate: [unauthGuard], // Allow access only if not authenticated
    
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    { path: '**', redirectTo: '/login' }, // Redirect unknown paths to login
];
