import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrencyPipe } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupSuccessfulComponent } from './authentication/signup-successful/signup-successful.component';
import { AuthGuard } from './authentication/auth.guard';
import { LoginAuthGuard } from './authentication/login-auth.guard';
import { ManagerAuthGuard } from './authentication/manager-auth.guard';
import { UniqueUsernameValidatorDirective } from './unique-username-validator.directive';
import { UserService } from './user.service';
import { ManagerService } from './manager.service';
import { ProductService } from './product.service';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListProductsComponent,
    AddProductComponent,
    NotFoundComponent,
    ListUsersComponent,
    AddUserComponent,
    UserFilterComponent,
    SignupComponent,
    LoginComponent,
    SignupSuccessfulComponent,
    UniqueUsernameValidatorDirective
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      { path: 'signup-successful', component: SignupSuccessfulComponent, canActivate: [LoginAuthGuard] },
      { path: 'signup', component: SignupComponent, canActivate: [LoginAuthGuard] },
      { path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard] },

      { path: 'admin/users/new', component: AddUserComponent, canActivate: [AuthGuard, ManagerAuthGuard]},
      { path: 'admin/users/:id', component: AddUserComponent, canActivate: [AuthGuard, ManagerAuthGuard]},
      { path: 'admin/users', component: ListUsersComponent, canActivate: [AuthGuard, ManagerAuthGuard]},

      { path: 'admin/products/new', component: AddProductComponent, canActivate: [AuthGuard, ManagerAuthGuard]},
      { path: 'admin/products/:id', component: AddProductComponent, canActivate: [AuthGuard, ManagerAuthGuard]},
      { path: 'admin/products', component: ListProductsComponent, canActivate: [AuthGuard]},


      { path: '',   redirectTo: '/login', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }

    ])
  ],
  providers: [CurrencyPipe, AuthGuard, ManagerAuthGuard, UserService, ManagerService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
