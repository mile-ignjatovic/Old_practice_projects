import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';

const authRouting: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent }
]

@NgModule({
    imports: [RouterModule.forChild(authRouting)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}