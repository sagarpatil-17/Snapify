import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {

  public page1: any;
  public page2: any;
  public isLoading: boolean = false;

  constructor(private _sharedService: SharedService, private http: HttpClient) { }

  ngOnInit() {
    this.getImages();
  }

  public getImages(event?) {
    this.isLoading = true;
    const eventVal = event?.target.value;
    this._sharedService.getImagesData(eventVal || 'people').subscribe((res: any) => {
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
