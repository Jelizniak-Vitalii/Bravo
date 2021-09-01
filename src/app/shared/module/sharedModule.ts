import { NgModule } from "@angular/core";
import { LogoComponent } from "../../logo/logo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "../../customComponent/search/search.component";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalWindow} from "../../customComponent/modalWindow/modalWindow";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule} from "@angular/material/table";
import { MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    LogoComponent,
    SearchComponent,
    ModalWindow

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  exports: [
    LogoComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    SearchComponent,
    ModalWindow,
    MatDialogModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,

  ]
})

export class SharedModule { }
