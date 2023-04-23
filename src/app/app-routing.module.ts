import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
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
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
