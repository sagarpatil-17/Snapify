import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isHeader: boolean = false;
  public isDarkMode: boolean = false;
  public isSuggestionDiv: boolean = false;
  public searchKeywords = ['travel', 'workout', 'college', 'motivational', 'road', 'cricket', 'football'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.onRouterChange();
  }

  private onRouterChange() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.isHeader = false;
          if (this.isDarkMode) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#1a1a1a';
            this.isDarkMode = false;
          }
        } else {
          this.isHeader = true;
        }
      }
    })
  }

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

}
