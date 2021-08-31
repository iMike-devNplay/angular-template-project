import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './public/docs/docs.component';
import { MainComponent } from './public/main/main.component';
import { NotFoundComponent } from './public/spare-pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'public/main', pathMatch: 'full' },
  { path: 'public/main', component: MainComponent },
  { path: 'public/docs', component: DocsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
