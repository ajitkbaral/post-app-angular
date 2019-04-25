import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostUpdatePageComponent } from './pages/post-update-page/post-update-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/:id', component: PostPageComponent },
  { path: 'posts/:id/edit', component: PostUpdatePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
