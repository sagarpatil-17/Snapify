import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public page1: any;
  public page2: any;
  public searchText: string;
  public isLoading: boolean = false;

  constructor(private _sharedService: SharedService, private actRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.searchText = this.actRoute.snapshot.params['searchText'];
    this.getImages();
  }

  public getImages() {
    this.isLoading = true;
    this._sharedService.getImagesData(this.searchText).subscribe((res: any) => {
      console.log(res);
      this.page1 = res;
      this.isLoading = false;
    })
  }

  public loadMore(url) {
    const key = 'kjG56NnZv46o7cgK7oczMjXUq0vOx4RtFdvNlqSr8oqfruW633nZGXcB';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': key
    }

    this.http.get(url, { headers: headers }).subscribe((res) => {
      this.page2 = res;
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
