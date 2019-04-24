import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/:id', component: PostPageComponent },
  { path: 'posts/:id/edit', component: PostFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
