import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  errorMessage: string | null = null;
  message: string = '';

  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value!;
      this.authService.resetPassword(email)
        .subscribe(
          () => this.message = 'Password reset email sent.',
          error => this.message = 'Error: ' + error.message
        );
    }
  }
  
}
