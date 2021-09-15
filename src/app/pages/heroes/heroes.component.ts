import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/shared/services/marvel-api-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private marvelService: MarvelApiServiceService) { }

  heroesList: Array<any> = [];
  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.marvelService.getAllCharacters().subscribe(
      data => {
        this.heroesList = data.data.results;
        this.formatHeroes();
        console.log(this.heroesList);
      }, error => {
        console.error(error);
      }, () => { }
    )
  }

  formatHeroes(): void {
    this.heroesList.map(hero => {
      hero.thumbnail.path = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
      hero.urls.map((url: { type: string; url: string }) => {
        switch(url.type) {
          case 'detail':
            url.type = 'Detalhes';
            break;
          case 'wiki':
            url.type = 'Informações';
            break;
          default:
            url.type = 'Quadrinhos';
        }
      })
    })
  }

  activeButton(event: any): void {
    console.log(event);
  }

}