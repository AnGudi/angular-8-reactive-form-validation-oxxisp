import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
