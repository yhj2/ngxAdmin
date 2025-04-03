import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';
import { NbButtonModule, NbCardModule, NbToggleModule, NbTreeGridModule } from '@nebular/theme';



@NgModule({
  declarations: [MyComponent],
  imports: [
    NbButtonModule,
    NbCardModule,
    NbToggleModule,
    NbTreeGridModule,
    CommonModule
  ]
})
export class MyModule { }
