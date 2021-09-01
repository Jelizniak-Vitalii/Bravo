import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { environment } from "../../environments/environment";
import { MatDialog } from "@angular/material/dialog";
import { ReplaceCatalogComponent } from "./replaceCatalog/replaceCatalog.component";
import { AddProductComponent } from "./addProduct/addProduct.component";
import { DeleteProductComponent } from "./deleteProduct/deleteProduct.component";
import { FormControl, FormGroup } from "@angular/forms";

import { CatalogHttpService } from "../shared/services/catalog/catalogHttpService";
import { ShowMenuService } from "../shared/services/menu/showMenuService";
import { UpdateService } from "../shared/services/updateService";

export interface PeriodicElement {
  productId: string,
  productCode: string,
  name: string,
  unit: string,
  price: string,
  units: {
    unit?: string,
    price?: string,
  },
  availability: {
    inStock: boolean,
    outOfStock: boolean,
    discontinued: boolean
  }
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  availabilityModal: boolean;
  showConfirmProductAdd: boolean;

  form: FormGroup;

  activeMenu: boolean = false;

  displayedColumns: string[] = [ 'productCode', 'name', 'Price', 'Unit', 'Availability', 'Actions'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor(
    private getCatalogData: CatalogHttpService,
    private dialog: MatDialog,
    private showMenuService: ShowMenuService,
    private updateCatalogs: UpdateService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      inStock: new FormControl(false),
      outOfStock: new FormControl(false),
      discontinued: new FormControl(false)
    })
    this.updateCatalogs.update.subscribe((el) => {
      this.renderCatalogs( environment.GET_CATALOG_DATA )
    })
    this.renderCatalogs( environment.GET_CATALOG_DATA );

    this.updateCatalogs.data$.subscribe(el => {
      this.showConfirmProductAdd = el
    })

    // this.updateCatalogs.update.subscribe(el => {
    //   this.renderCatalogs( environment.GET_CATALOG_DATA );
    // })
  }

  renderCatalogs( api: string ) {
    this.getCatalogData.getCatalogData( api )
      .subscribe((el: any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(el);
        this.dataSource.paginator = this.paginator;
      })
  }

  searchProducts( event: any ): void {
    this.getCatalogData.searchProducts( environment.SEARCH_PRODUCTS, { value: event.target.value } )
      .subscribe((el:any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(el);
        this.dataSource.paginator = this.paginator;
      })
  }

  submitAvailability(): void {
      setTimeout(()=> {
        if(this.form.value.inStock == false && this.form.value.outOfStock == false && this.form.value.discontinued == false) {
         return this.renderCatalogs( environment.GET_CATALOG_DATA );
        }
        this.getCatalogData.sortProduct(environment.SORT_PRODUCT, this.form.value)
         .subscribe((el: any) => {
         this.dataSource = new MatTableDataSource<PeriodicElement>(el);
         this.dataSource.paginator = this.paginator;
         })
      })
  }

  showMenu(): void {
    this.activeMenu = !this.activeMenu;
    this.showMenuService.changeStateMenu(this.activeMenu);
  }

  replaceCatalog(): void {
    this.dialog.open(ReplaceCatalogComponent);
  }

  addProduct(): void {
    this.dialog.open(AddProductComponent);
  }

  deleteProduct(event: any) {
    this.dialog.open(DeleteProductComponent, { data: event });
  }

  showModalAvailability(): void{
    this.availabilityModal = !this.availabilityModal;
  }
}
