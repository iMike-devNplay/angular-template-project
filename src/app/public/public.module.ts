import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SparePagesModule } from './spare-pages/spare-pages.module';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    MainComponent,
    DocsComponent
  ],
  imports: [
    CommonModule,
    SparePagesModule
  ]
})
export class PublicModule { }
