import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent {

  public isSuggestionDiv: boolean = false;
  public searchKeywords = ['travel', 'workout', 'college', 'motivational', 'road', 'cricket', 'football'];

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  searchForm = new FormGroup({
    userSearch: new FormControl('', Validators.required)
  })

  public showSuggestion(status) {
    this.isSuggestionDiv = status;
  }

  public delayHideSuggestion() {
    setTimeout(() => {
      this.showSuggestion(false);
    }, 200);
  }

  public onSearch() {
    const searchInput = this.searchForm.value.userSearch;
    this.router.navigate([`search/${searchInput}`]);
  }

  public onKeyword(keyword: string) {
    this.router.navigate([`search/${keyword}`]);

    this.cdr.detectChanges();
  }

}
