import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularTokenModule } from 'angular-token';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { NavComponent } from './components/nav/nav.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostUpdatePageComponent } from './pages/post-update-page/post-update-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const myRoots: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'posts', component: PostsComponent, pathMatch: 'full' , canActivate:
  [AuthGuard]},
  { path: '', component: LoginPageComponent },
  { path: 'posts/new', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostPageComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id/edit', component: PostUpdatePageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    NavComponent,
    PostPageComponent,
    PostFormComponent,
    ProfileComponent,
    LoginFormComponent,
    LoginPageComponent,
    PostUpdatePageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000',
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ AngularTokenModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
