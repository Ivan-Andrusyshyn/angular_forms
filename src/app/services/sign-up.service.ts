import { inject, Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  router = inject(Router);

  constructor() {}

  goToNextStep(): void {
    const currentRoute = this.router.url;

    // let nextRoute: string;
    // switch (currentRoute) {
    //   case '/signup/main':
    //     nextRoute = '/signup/your-goal';
    //     break;
    //   case '/signup/your-goal':
    //     nextRoute = '/signup/select-gender';
    //     break;
    //   case '/signup/select-gender':
    //     nextRoute = '/signup/body-parameters';
    //     break;
    //   case '/signup/body-parameters':
    //     nextRoute = '/signup/your-activity';
    //     break;
    //   case '/signup/your-activity':
    //     nextRoute = '/signup/complete';
    //     break;
    //   default:
    //     nextRoute = '/signup/main';
    //     break;
    // }
    // this.router.navigateByUrl(nextRoute);
  }
}
