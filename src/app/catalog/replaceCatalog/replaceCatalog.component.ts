import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import {MatDialog} from "@angular/material/dialog";




@Component({
  selector: 'app-replace-catalog',
  templateUrl: './replaceCatalog.component.html',
  styleUrls: ['./replaceCatalog.component.scss']
})
export class ReplaceCatalogComponent implements OnInit {

  public file: File | null = null;
  public isLoaded: boolean = true;
  kb: number | string;

  constructor(
    private dialog: MatDialog,

  ) { }

  reader = new FileReader();

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: any) {
    const a = event.addedFiles[0].size / 1024;
    this.kb = `${a.toFixed(2)} kb`
    this.isLoaded = !this.isLoaded
    const file = event.addedFiles[0];
    const format = file.name.split('.')[1];
    if(format !== 'csv'){
      return console.log('File type is not csv')
    }
    this.files.push(...event.addedFiles);
    Papa.parse(event.addedFiles[0], {
      header: true,
      skipEmptyLines: true,
      complete: (result: any,file: File | undefined) => {
        console.log(result.data);
      }
    });

  }







onRemove(event: any) {
    this.isLoaded = !this.isLoaded
    this.files.splice(this.files.indexOf(event), 1);
  }
}
