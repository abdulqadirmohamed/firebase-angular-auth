import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNc8AL5NDRWn6Pbje2Hbrgm4PQsF-8fZQ",
  authDomain: "next-auth-6d7d6.firebaseapp.com",
  projectId: "next-auth-6d7d6",
  storageBucket: "next-auth-6d7d6.appspot.com",
  messagingSenderId: "662200400092",
  appId: "1:662200400092:web:a57fddd8cdb56164b8dc19",
  measurementId: "G-9SPYBWF5X2"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(()=> getAuth())
  ]
};
