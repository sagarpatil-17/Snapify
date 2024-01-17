import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) { }

  public Popular_tags = ['Sports', 'Cool Photos', 'Textures', 'Black Backgrounds'];
  public wallpaper_tags = ['HD Wallpapers', '4k Wallpapers', 'PC Wallpapers', 'Mobile Wallpapers'];
  public other_tags = ['Happy Birthday Images', 'Cool Wallpapers', 'Technology', 'Products'];

  public onTags(tag: string) {
    this.router.navigate([`search/${tag}`]);
  }

}
