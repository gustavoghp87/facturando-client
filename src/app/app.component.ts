import { Component } from '@angular/core';
import { FacturarService } from './services/facturar.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  
  title = 'facturando-client'

  constructor(private facturarService:FacturarService) { }

  facturar() {
    this.facturarService.facturar().subscribe((response)=>console.log(response))
  }

}
