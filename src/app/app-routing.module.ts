import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dalle', pathMatch: 'full' },
  {
    path: 'dalle',
    loadChildren: () =>
      import('./dalle/dalle.module').then((m) => m.DalleModule),
  },
  {
    path: 'chatgpt',
    loadChildren: () =>
      import('./chatgpt/chatgpt.module').then((m) => m.ChatgptModule),
  },
  {
    path: 'text2speech',
    loadChildren: () =>
      import('./text2speech/text2speech.module').then(
        (m) => m.Text2speechModule
      ),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
