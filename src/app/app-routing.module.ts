import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltComponent } from './built/built.component';

const routes: Routes = [
  {
    path: '',
    component: BuiltComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
