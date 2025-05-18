import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-H861nDWYC_S4SJWZG-yfVrsDAEMAhPU",
  authDomain: "davisginsburgdotcom.firebaseapp.com",
  projectId: "davisginsburgdotcom",
  storageBucket: "davisginsburgdotcom.firebasestorage.app",
  messagingSenderId: "952597186014",
  appId: "1:952597186014:web:933911bf76df8acf9a494f",
  measurementId: "G-YT554GEDJE"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
