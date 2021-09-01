import { Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true
  }]
})
export class SearchComponent implements OnInit,ControlValueAccessor {
  @ViewChild('search') search: ElementRef;
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (value: any) => {};

  registerOnChange(fn: any): void {
    this.value = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  writeValue(obj: any): void {
  }

  clearSearch() {
    this.search.nativeElement.value = '';
  }

}
