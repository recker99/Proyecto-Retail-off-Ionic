import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, updateProfile, createUserWithEmailAndPassword, User } from '@angular/fire/auth'; 
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variable para almacenar el estado de autenticación
  currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null); 

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
    // estado de autenticación
    this.auth.onAuthStateChanged(user => {
      this.currentUser.next(user); 
    });
   }
   async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential; // Retorna las credenciales 
    } catch (e) {
      console.error("Error during login:", e);
      throw e;
    }
  }

  async register(username: string, email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Actualiza el perfil del usuario 
      await updateProfile(user, { displayName: username });

      // Guarda el username en Firestore
      await setDoc(doc(this.firestore, `users/${user.uid}`), {
        username: username,
        email: email,
      });

      // Redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error during registration:', error);
      throw error; // 
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.currentUser.next(null); 
      this.router.navigate(['/login']); 
    } catch (e) {
      console.error("Error during logout:", e);
      throw e;
    }
  }
}

