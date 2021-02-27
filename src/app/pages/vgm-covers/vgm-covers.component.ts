import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '@app/services/youtube.service';
import { playlistItemListResponse } from '@app/services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vgm-covers',
  templateUrl: './vgm-covers.component.html',
  styleUrls: ['./vgm-covers.component.css']
})
export class VgmCoversComponent implements OnInit {

  constructor(private route: ActivatedRoute, private youtube: YoutubeService, protected sanitizer: DomSanitizer) { }

  title: string = 'Brendan\'s Covers';
  subtitle: string = 'Mostly Video Game Music';
  vgmCoverVideos: playlistItemListResponse;


  ngOnInit(): void {
    console.log('testing');
      this.youtube.getPlaylistVideos(this.youtube.playlistId_VGMCovers).subscribe({
        next: data => {
          this.vgmCoverVideos = data;
          //Need to set safeURL here instead of in the HTML template because of refresh issues.
          //See https://stackoverflow.com/questions/39429293/url-sanitization-is-causing-refresh-of-the-embedded-youtube-video 
          this.vgmCoverVideos.items.map((obj) => {
            obj.snippet.safeURL = this.youTubeURL(obj.snippet.resourceId.videoId);
            return obj;
          })
        },
        error: error => {
          console.error('There was an error!', error);
        }
    });
  }
 
  youTubeURL(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + value);
  }

}
