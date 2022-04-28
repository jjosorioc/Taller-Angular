import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) {}
  public series: Array<Serie> = [];
  public seasonAVG: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getAvg();
    });
  }

  getAvg() {
    for (let i of this.series) {
      this.seasonAVG += i.seasons;
    }

    this.seasonAVG = this.seasonAVG / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
    //this.getAvg();
  }
}
