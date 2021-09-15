import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/shared/services/marvel-api-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private marvelService: MarvelApiServiceService) { }

  seriesList: Array<any> = [];
  loading: boolean = false;

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.loading = true;
    this.marvelService.getSeries().subscribe(
      data => {
        this.seriesList = data.data.results;
        this.formatSeries();
        console.log(this.seriesList);
      }, error => {
        console.error(error);
        this.loading = false;
      }, () => { }
    )
  };

  formatSeries(): void {
    this.seriesList.map(serie => {
      serie.thumbnail.path = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;
      serie.urls.map((url: { type: string; url: string }) => {
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
  };


}
