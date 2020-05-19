import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindComponent } from './find/find.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SoccerdetailComponent } from './soccerdetail/soccerdetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path:'find',component:FindComponent
  },
  {
    path:'soccerdetail/:id',component:SoccerdetailComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'cart',component:CartComponent,canActivate:[AuthGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
