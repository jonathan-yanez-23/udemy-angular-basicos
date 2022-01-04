import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Neo', 'JotaroKujo'];
  heroeBorrado: string = '';
  borrarHeroe() {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() ||'';
    console.log(this.heroeBorrado);
  }
}
