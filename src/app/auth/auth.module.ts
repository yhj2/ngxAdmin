import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NbButtonModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { NbLoginComponent } from '@nebular/auth';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AuthModule { }
