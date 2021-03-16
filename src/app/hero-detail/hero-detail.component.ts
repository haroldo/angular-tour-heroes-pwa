import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  public hero?: Hero;


  id = 0;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.getHero();
  }

  getHero(): void {

    let temp = Number(this.route.snapshot.paramMap.get('id'));
    if(temp !== 0){
    this.heroService.getHero(temp).subscribe(hero => this.hero = hero);
   console.log('Harold');
    }

  }

  goBack(): void {
    this.location.back();
    this.hero
  }

  save(): void {
    this.heroService.updateHero(this.hero!)
      .subscribe(() => this.goBack());
  }

}

