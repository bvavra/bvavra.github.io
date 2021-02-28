import { Component, OnInit, SecurityContext } from '@angular/core';
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
           
          this.vgmCoverVideos.items.map((obj) => {
            //Need to set safeURL here instead of in the HTML template because of refresh issues.
            //See https://stackoverflow.com/questions/39429293/url-sanitization-is-causing-refresh-of-the-embedded-youtube-video
            obj.snippet.safeURL = this.makeIntoSafeURL('https://www.youtube.com/embed/' + obj.snippet.resourceId.videoId);

            if(obj.snippet.description.includes('bvavra/vgm-accordion-sheets')){
              //TODO: how to handle if a description contains multiple sheets?
              let sheetURL = obj.snippet.description.match('https://github.com/bvavra/vgm-accordion-sheets/(.*).pdf');
              obj.snippet.sheetMusicURL = this.makeIntoSafeURL(sheetURL[0]);
            }
            //TODO: consider also uploading/sharing .mid files and using this icon: https://fontawesome.com/icons/file-audio?style=solid
            //And maybe if there's a SoundCloud link we can share that too

            //Do we also want Title?  Or is that a bit _too_ redundant with the header?
            obj.snippet.composer = obj.snippet.description.match('Composer:(.*)[\r\n|\r|\n|↵]+')[0];
            obj.snippet.game = obj.snippet.description.match('Game[s]?:(.*)[\r\n|\r|\n|↵]+')[0];

            return obj;
          })
        },
        error: error => {
          console.error('There was an error!', error);
        }
    });
  }
 
  makeIntoSafeURL(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
