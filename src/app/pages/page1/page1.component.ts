import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiServiceService } from 'src/app/shared/services/marvel-api-service.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private marvelService: MarvelApiServiceService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.marvelService.getAllCharacters().subscribe(
      data => {
        console.log(data.data.results)
      }
    )
  }

}