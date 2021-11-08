import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '@app/services/youtube.service';
import { playlistItem } from '@app/services/youtube.service';

@Component({
  selector: 'app-vgm-covers',
  templateUrl: './vgm-covers.component.html',
  styleUrls: ['./vgm-covers.component.css']
})
export class VgmCoversComponent implements OnInit {

  constructor(private route: ActivatedRoute, private youtube: YoutubeService) { }

  title: string = 'Brendan\'s Covers';
  subtitle: string = 'Mostly Video Game Music';
  vgmCoverVideos: Array<playlistItem> = [];
  nextPageToken: string;


  ngOnInit(): void {
    this.getPlaylistVideos('');
  }

  getPlaylistVideos(pageToken){
    this.youtube.getPlaylistVideos(this.youtube.playlistId_VGMCovers, pageToken).subscribe({
      next: data => {
        for(let i = 0; i < data.items.length; i++){
          this.vgmCoverVideos.push(data.items[i]);
        }
        this.nextPageToken = data.nextPageToken;
        this.vgmCoverVideos.map((obj) => {
          obj.snippet.safeURL = 'https://www.youtube.com/embed/' + obj.snippet.resourceId.videoId;

          if(obj.snippet.description.includes('bvavra/vgm-accordion-sheets')){
            //TODO: how to handle if a description contains multiple sheets?
            let sheetURL = obj.snippet.description.match('https://github.com/bvavra/vgm-accordion-sheets/(.*).pdf');
            obj.snippet.sheetMusicURL = sheetURL[0];
          }
          //TODO: consider also uploading/sharing .mid files and using this icon: https://fontawesome.com/icons/file-audio?style=solid
          //And maybe if there's a SoundCloud link we can share that too
          if(obj.snippet.description.includes('open.spotify.com')){
            let spotifyURL = obj.snippet.description.match('https://open.spotify.com/(.*)[\r\n|\r|\n|↵]+');
            obj.snippet.spotifyURL = spotifyURL[0];
          }
          if(obj.snippet.description.includes('music.apple.com')){
            let appleMusicURL = obj.snippet.description.match('https://music.apple.com/us/album/(.*)[\r\n|\r|\n|↵]+');
            obj.snippet.appleMusicURL = appleMusicURL[0];
          }
          if(obj.snippet.description.includes('pandora.com/artist/brendan-vavra/')){
            let pandoraURL = obj.snippet.description.match('https://www.pandora.com/artist/brendan-vavra/(.*)[\r\n|\r|\n|↵]+');
            obj.snippet.pandoraURL = pandoraURL[0];
          }
          if(obj.snippet.description.includes('amazon.com')){
            let amazonMusicURL = obj.snippet.description.match('https://www.amazon.com/dp/(.*)[\r\n|\r|\n|↵]+');
            obj.snippet.amazonMusicURL = amazonMusicURL[0];
          }

          //Do we also want Title?  Or is that a bit _too_ redundant with the header?
          let composer = obj.snippet.description.match('Composer:(.*)[\r\n|\r|\n|↵]+');
          if(composer){
            obj.snippet.composer = composer[0];
          }
          let game = obj.snippet.description.match('Game[s]?:(.*)[\r\n|\r|\n|↵]+');
          if(game){
            obj.snippet.game = game[0];
          }

          return obj;
        });
      },
      error: error => {
        console.error('There was an error!', error);
      }
  });
  }

  onScroll() {
    if(this.nextPageToken){
      this.getPlaylistVideos(this.nextPageToken);
    }
    //console.log('scrolled!!');
  }

}
