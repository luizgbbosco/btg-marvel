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
  loading: boolean = false;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.loading = true;
    this.marvelService.getCharacters().subscribe(
      data => {
        this.heroesList = data.data.results;
        this.formatHeroes();
      }, error => {
        console.error(error);
        this.loading = false;
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
    });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}