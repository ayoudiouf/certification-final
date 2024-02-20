import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, Router,} from '@angular/router';
import { UserService } from '../services/user.service';
// import { AuthenticationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: UserService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      this.router.navigate(['/acueil']);
      return false;
    }
  }
}











// import { CanActivateFn } from '@angular/router';

// export const guardRouteGuard: CanActivateFn = (route, state) => {
//   return true;
// };
