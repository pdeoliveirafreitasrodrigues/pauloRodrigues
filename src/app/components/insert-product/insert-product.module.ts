import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertProductComponent } from './insert-product.component';
import { insertProductRountingModule } from './insert-product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsertProductComponent
  ],
  imports: [
    CommonModule,
    insertProductRountingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InsertProductModule { }
