import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, pipe } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public page1: any;
  public nextPage: any;
  public searchText: string;
  public isLoading: boolean = false;
  public isFilter: boolean = false;
  public currentFilter: string = 'original';
  public loadMoreUrl: string;
  public isDotLoader: boolean = false;

  constructor(private _sharedService: SharedService, private actRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.searchText = this.actRoute.snapshot.params['searchText'];
    this.getImages();
    this.onRouterChange();
  }

  private onRouterChange() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getImages();
      }
    })
  }

  public onFilter() {
    this.isFilter = !this.isFilter;
  }

  public setFilter(filterVal) {
    this.currentFilter = filterVal;
  }

  public updateSrc(img, filter) {
    if (filter === 'original') {
      return img.src.original;
    } else if (filter === 'landscape') {
      return img.src.landscape;
    } else if (filter === 'portrait') {
      return img.src.portrait;
    }

    return img.src.original;
  }

  public getImages() {
    this.isLoading = true;
    this._sharedService.getImagesData(this.searchText).subscribe((res: any) => {
      console.log(res);
      this.page1 = res;
      this.isLoading = false;
      this.loadMoreUrl = res.next_page;
    })
  }

  public loadMore(url) {
    const key = 'kjG56NnZv46o7cgK7oczMjXUq0vOx4RtFdvNlqSr8oqfruW633nZGXcB';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': key
    }

    this.isDotLoader = true;
    this.http.get(url, { headers: headers }).subscribe((res: any) => {
      this.nextPage = res;
      this.loadMoreUrl = res.next_page;
      this.isDotLoader = false;
    })
  }

  public downloadImage(img: any): void {
    fetch(img.src.original)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = img.alt; // Set a default filename or extract from img.alt or other properties
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading image:', error));
  }

}
