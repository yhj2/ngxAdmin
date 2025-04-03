import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { NbLoginComponent } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    NbInputModule,
    NbButtonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbCardModule
  ]
})
export class AuthModule { }
