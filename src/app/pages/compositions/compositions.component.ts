import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoundCloudTracks } from '@app/services/soundcloudtracks';

@Component({
  selector: 'app-compositions',
  templateUrl: './compositions.component.html',
  styleUrls: ['./compositions.component.css']
})
export class CompositionsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  soundCloudTracks = SoundCloudTracks;
  data: string;

  ngOnInit(): void {
    this.data = this.route.snapshot.data.markdownData;

    this.soundCloudTracks.map((obj) => {
      obj.iframeSrcURL = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/' + obj.iframeSrcURI 
        + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
      obj.trackURL = 'https://soundcloud.com/brendanvavra/' + obj.trackURI;
      if(!obj.height){
        obj.height = "166";
      }
      return obj;
    });
  }

}
