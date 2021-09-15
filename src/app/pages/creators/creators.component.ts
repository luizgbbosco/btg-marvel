import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/shared/services/marvel-api-service.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(private marvelService: MarvelApiServiceService) { }

  creatorsList: Array<any> = [];
  loading: boolean = false;

  ngOnInit() {
    this.getCreators();
  }

  getCreators(): void {
    this.loading = true;
    this.marvelService.getCreators().subscribe(
      data => {
        this.creatorsList = data.data.results;
        this.formatCreators();
      }, error => {
        this.loading = false;
        console.error();
      }
    )
  };

  formatCreators(): void {
    this.creatorsList.map(creator => {
      creator.thumbnail.path = `${creator.thumbnail.path}.${creator.thumbnail.extension}`;
      creator.urls.map((url: { type: string; url: string }) => {
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