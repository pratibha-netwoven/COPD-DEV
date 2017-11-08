import {RouterModule, Routes} from '@angular/router';
// import {}
import {WelcomeaComponent} from './welcomea/welcomea.component';
import {WelcomebComponent} from './welcomeb/welcomeb.component';
import {WelcomecComponent} from './welcomec/welcomec.component';
import {Generic1Component} from './generic1/generic1.component';
//ScreeningQuestionsComponent

export const ROUTES : Routes = [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'welcomea',
      component: WelcomeaComponent
    }, {
      path: 'welcomeb',
      component: WelcomebComponent
    }, {
      path: 'welcomec',
      component: WelcomecComponent
    },
    {
      path: 'generic1/:pageName', pathMatch:'full',
      component: Generic1Component
    }
  ];