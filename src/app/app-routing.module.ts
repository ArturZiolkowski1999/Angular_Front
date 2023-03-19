import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Components/post/post.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostEditComponent } from './Pages/post-edit/post-edit.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'post/:id', component: PostComponent },
{ path: 'postedit/:id', component: PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
