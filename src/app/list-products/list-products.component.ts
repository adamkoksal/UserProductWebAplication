import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../products';
import { UserService } from '../user.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Observable<Product[]>;
  
  columns = ["Name", "Category", "Price   ", "Quantity", ""];

  constructor(private productService: ProductService, private userService: UserService, private managerService: ManagerService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProducts();
  }
  
  _isManager() {
    if (this.managerService.manager) {
      return true;
    } else {
      return false;
    }
  }
}
