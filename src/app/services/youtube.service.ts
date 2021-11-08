import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SafeResourceUrl } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  urlRoot: string = 'https://www.googleapis.com/youtube/v3/';
  apiKey: string = 'AIzaSyCfInQy9ebYDBS8eg0PIhXWvoY61F6jnYI';
  channelId: string = 'UCNoZbcrp9AXKxevNwGelc9g';
  playlistId_channel: string = 'UUNoZbcrp9AXKxevNwGelc9g';
  playlistId_VGMCovers: string = 'PLwO5aXJYrMqS4Ug3c0unTqDuNBVFURtSN';
  defaultPageSize: number = 10;

  getChannelVideos(pageToken): Observable<playlistItemListResponse> {
     return this.getPlaylistVideos(this.playlistId_channel, pageToken);
  }

  getPlaylistVideos(playlistId, pageToken): Observable<playlistItemListResponse> {
    if (pageToken !== undefined){
      return this.http.get<playlistItemListResponse>(this.urlRoot + 'playlistItems?playlistId=' + playlistId + '&part=snippet&maxResults=' + this.defaultPageSize + '&key=' + this.apiKey + '&pageToken=' + pageToken);
    }
  }

  //Get Data for YT Video by Id:
  //https://www.googleapis.com/youtube/v3/videos?id=v0LMuvu5cvI&key=AIzaSyCfInQy9ebYDBS8eg0PIhXWvoY61F6jnYI&part=snippet,statistics&fields=items(id,snippet,statistics)
  //Get Data for YT Channel by Id:
  //https://www.googleapis.com/youtube/v3/channels?id=UCNoZbcrp9AXKxevNwGelc9g&key=AIzaSyCfInQy9ebYDBS8eg0PIhXWvoY61F6jnYI&part=snippet,statistics,contentDetails
  //Get Playlist by Id (BV uploads):
  //https://www.googleapis.com/youtube/v3/playlists?id=UUNoZbcrp9AXKxevNwGelc9g&key=AIzaSyCfInQy9ebYDBS8eg0PIhXWvoY61F6jnYI&part=snippet,contentDetails
  //Get Videos for a Playlist (by playlist id):
  //https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUNoZbcrp9AXKxevNwGelc9g&key=AIzaSyCfInQy9ebYDBS8eg0PIhXWvoY61F6jnYI&part=snippet,contentDetails
  //pageToken for paging (see nextToken and prevToken)
  //maxResults to update page size (0-50, default=5)
  //search by keyword within a given channel:
  //https://www.googleapis.com/youtube/v3/search?q=zelda&part=snippet&maxResults=25&type=video&channelId=UCNoZbcrp9AXKxevNwGelc9g&key=AIzaSyCfInQy9ebYDBS8eg0PIhXWvoY61F6jnYI
  //type = channel, video, playlist
}

export interface playlistItemListResponse {
  kind: string;
  nextPageToken: string;
  items: Array<playlistItem>;
}

export interface playlistItem {
  kind: string;
  id: string;
  snippet: youtubeVideo;
}

export interface youtubeVideo {
  title: string;
  description: string;
  publishedAt: Date;
  resourceId: youtubeVideoResource;
  safeURL: SafeResourceUrl;
  sheetMusicURL: SafeResourceUrl;
  spotifyURL: SafeResourceUrl;
  pandoraURL: SafeResourceUrl;
  appleMusicURL: SafeResourceUrl;
  amazonMusicURL: SafeResourceUrl;
  composer: string;
  game: string;
}

export interface youtubeVideoResource {
  kind: string;
  videoId: string;
}

/*
{
    "kind": "youtube#playlistItemListResponse",
    "etag": "Lqa6YDjvDOknMpNTJZu_uUqCWa0",
    "items": [
        {
            "kind": "youtube#playlistItem",
            "etag": "4E7hbP3oKkVSX1eeuiC-aklbkLM",
            "id": "UEx3TzVhWEpZck1xUzRVZzNjMHVuVHFEdU5CVkZVUnRTTi4xOTEzQzhBQzU3MDNDNjcz",
            "snippet": {
                "publishedAt": "2021-02-24T12:16:51Z",
                "channelId": "UCNoZbcrp9AXKxevNwGelc9g",
                "title": "Undertale - Temmie Village (on... Jawharp?)",
                "description": "* hOI!!\n* im temmie!!!\n\nTrack: Temmie Village\nComposer: Toby Fox\nGame: Undertale (2015)\n\nDecided to try something fun with this video and see if I could make an arrangement with nothing but jawharp (...but couldn't resist adding accordion in the end).  Turns out getting a solid in-tune pitch from the jawharp is a lot harder than I thought it would be, so I cheated a bit with some pitch-shifting so at least all the parts are out of tune together.\n\nCheck out the sheet music for solo accordion here:\nhttps://github.com/bvavra/vgm-accordion-sheets/blob/main/Undertale/Undertale%20-%20Temmie%20Village%20-%20Solo%20Accordion.pdf",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H26NNWHHAJI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H26NNWHHAJI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H26NNWHHAJI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/H26NNWHHAJI/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/H26NNWHHAJI/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Brendan Vavra",
                "playlistId": "PLwO5aXJYrMqS4Ug3c0unTqDuNBVFURtSN",
                "position": 0,
                "resourceId": {
                    "kind": "youtube#video",
                    "videoId": "H26NNWHHAJI"
                },
                "videoOwnerChannelTitle": "Brendan Vavra",
                "videoOwnerChannelId": "UCNoZbcrp9AXKxevNwGelc9g"
            }
        },
*/
