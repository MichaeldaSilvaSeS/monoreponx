import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UiHeaderModule } from '@workspaceworkflow/ui-header';
import { UiLoginModule } from '@workspaceworkflow/ui-login';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LibApisModule } from '@workspaceworkflow/lib-apis';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent],
  imports: [BrowserModule,LibApisModule, UiHeaderModule,UiLoginModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
