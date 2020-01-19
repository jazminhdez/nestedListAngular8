import { Component, OnInit} from '@angular/core';
import { Element } from './models/Element';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nestedList';
  public elements: Element[];

  constructor(private countryService: CountryService) { 
    
  }

  public ngOnInit(): void {
    this.getElements();
  }

  getElements(): void {
    this.countryService.getElements()
        .subscribe(elements => {
          this.elements = elements
        });
  }
  
}
