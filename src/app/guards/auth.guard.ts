import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LOGIN } from '../routes';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const user = localStorage.getItem('mockUser');
		if (user) {
			return true;
		}

		// not logged in so redirect to login page with the return url
		this.router.navigate([`/${LOGIN}`], { queryParams: { returnUrl: state.url } });
		return false;
	}
}
