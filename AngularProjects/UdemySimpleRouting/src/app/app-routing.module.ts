import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/canDeactivateGuardService';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent } // dve tacke jer to znaci da je id dinamicka komponenta
  ] },
  { path: 'servers',
    // canActivate: [AuthGuardService],  // da sacuva ovaj path i sve njegove childove
    // da sacuva samo child pathove servers patha
    canActivateChild: [AuthGuardService], // . ovo radi zato sto je definisan canActivateChild interface u AuthGuardService klasi
    component: ServersComponent, children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, // ovde ce da ostane data iz resolvera kada se
    // ucitava i nece se ucitati dok se ne ucita
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' } // svi moguci putevi koji nisu definisani gore on mora da bude zadnji
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})   // kad ovo stavim ispred prvog slasha ce da stavi # kao sejfti za stare servere
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]

})

export class AppRoutingModule {

}
