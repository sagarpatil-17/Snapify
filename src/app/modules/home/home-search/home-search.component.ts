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
  public searchKeywords = ['travel', 'workout', 'college', 'motivational', 'football'];
  public isDarkMode: boolean = false;

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

  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkModeStyles();
  }

  private applyDarkModeStyles(): void {
    if (this.isDarkMode) {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#1a1a1a';
    }
  }

  ngOnDestroy() {
    if (this.isDarkMode) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#1a1a1a';
    }
  }

}
