import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertProductComponent } from './insert-product.component';
import { insertProductRountingModule } from './insert-product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InsertProductComponent
  ],
  imports: [
    CommonModule,
    insertProductRountingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgbAlertModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NgbToastModule
    
    
  ]
})
export class InsertProductModule { }
