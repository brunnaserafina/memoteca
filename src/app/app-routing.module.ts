import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThoughts',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: CreateThoughtsComponent,
  },
  {
    path: 'listThoughts',
    component: ListThoughtsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
