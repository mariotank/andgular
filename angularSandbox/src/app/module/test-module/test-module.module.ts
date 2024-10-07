import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from "../../component/test/test.component";
import {TestModule2Module} from "../test-module2/test-module2.module";
import {Test2Component} from "../../component/test2/test2.component";



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestModule2Module
  ],
  exports: [
    TestComponent
  ]
})
export class TestModuleModule { }
