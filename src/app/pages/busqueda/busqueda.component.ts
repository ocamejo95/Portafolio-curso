import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from "../../services/productos.service";
import {ProductosModel} from "../../models/productos.model";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public productos: ProductosModel[] = [];
  public productosFiltrados: ProductosModel[] = [];

  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.getProductos();
    this.route.params
      .subscribe(params => {
        this.cargarProductos(params['termino']);
      })
  }

  getProductos() {

    return new Promise<void>((resolve, reject) => {

      this.productosService.getProductos()
        .subscribe((response: ProductosModel[]) => {
          this.productos = response;
          resolve();
        });
    });


  }

  cargarProductos(termino: string) {

    if (this.productos.length === 0) {
      this.getProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  filtrarProductos(termino: string) {
    this.productosFiltrados = [];

    termino = termino.toLowerCase()

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrados.push(prod);
      }
    });

  }
}
