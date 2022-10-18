import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../services/productos.service";
import {ProductosModel} from "../../models/productos.model";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  public productos: ProductosModel[] = []
  public cargando = true;

  constructor(private productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productosService.getProductos()
      .subscribe((response: ProductosModel[]) => {
        this.productos = response;
        this.cargando = false;
      })
  }

}
