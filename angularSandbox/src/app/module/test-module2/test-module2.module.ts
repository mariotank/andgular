import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Test2Component} from "../../component/test2/test2.component";


@NgModule({
  declarations: [Test2Component],
  imports: [
    CommonModule
  ],
  exports: [
    Test2Component
  ]
})
export class TestModule2Module {
}
