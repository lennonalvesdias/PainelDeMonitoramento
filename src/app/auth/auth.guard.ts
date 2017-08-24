import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _rota: Router,
        private _authService: AuthService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this._authService.usuarioAutenticado()) {
            return true;
        }

        this._rota.navigate(['/login']);
        return false;
    }
}
