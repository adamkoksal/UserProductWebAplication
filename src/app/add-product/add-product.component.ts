import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  id;
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) {

      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.product = this.productService.get(this.id).pipe(take(1)).subscribe(p => this.product = p);
      }
  }

  save(value) {
    if (this.id) {
      this.productService.updateProduct(this.id, value)
        .subscribe(data => console.log(data), error => console.log(error));
    } else {
      this.productService.addProduct(value)
        .subscribe(data => console.log(data), error => console.log(error));
    }
    this.router.navigate(['admin/products']);
  }

  delete() {
    if (confirm("Are you sure?")) {
      if (this.id) {
        this.productService.deleteProduct(this.id)
          .subscribe(data => console.log(data), error => console.log(error));
      }
      this.router.navigate(['admin/products']);
    }
  }



}
