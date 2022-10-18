import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from "../../services/productos.service";
import {ProductoDescripcionModel} from "../../models/producto-descripcion.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public item: ProductoDescripcionModel = {};
  public id = '';

  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.getItems()
  }

  getItems() {
    this.route.params
      .subscribe(parametros => {
        this.productosService.getItems(parametros['id'])
          .subscribe((response: ProductoDescripcionModel) => {
            this.id = parametros['id'];
            this.item = response;
          })

      })
  }

}
