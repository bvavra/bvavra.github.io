
export interface SoundCloudTrack {
  title: string;
  year: string;
  description: string;
  embedHTML: string;
}

//TODO: replace this hardcoded data with API calls from SoundCloud (once we figure out how to call the SoundCloud API)
export const SoundCloudTracks: SoundCloudTrack[] = [
  { title: 'Vega', year: '2009', 
    description: `This original 5-movement piece is based on a true story about a stray cat (portrayed by the clarinet) that appeared at my doorstep in the summer of 2009.  
      In this retelling the human (flute) cares for the cat in hopes of gaining her trust, while the human's pre-existing cats (the violin and cello) 
      look upon the stray in disdain for invading their territory.  The cat was named Vega after the brightest star in the constellation Lyra.  
      Using the name as an influence on pitch material for this piece, I mapped musical intervals onto each constellation in the summer triangle 
      to derive a unique harmonic language for each instrument.
      <br/><br/>
      Performers:<br/>
      Emily Wespiser, flute; Devon LePore, clarinet; Isaac Shiman, violin; Brooks Griffith, cello;
      <br/>
      Performed at the Ithaca College Fall 2009 Student Composition Recital`, 
    embedHTML: `<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23499189&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
          <a href="https://soundcloud.com/brendanvavra" title="Brendan Vavra" target="_blank" style="color: #cccccc; text-decoration: none;">Brendan Vavra</a> · 
          <a href="https://soundcloud.com/brendanvavra/sets/vega" title="Vega" target="_blank" style="color: #cccccc; text-decoration: none;">Vega</a>
      </div>` },
  { title: 'Slow Night', year: '2009', 
    description: `This original piece for Wind Quintet was inspired by the painting in this image, which was created by my brother, Casey Vavra.
      <br/><br/>
      Performed at the Ithaca College Spring 2009 Student Composition Recital`, 
    embedHTML: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/996417265&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
          <a href="https://soundcloud.com/brendanvavra" title="Brendan Vavra" target="_blank" style="color: #cccccc; text-decoration: none;">Brendan Vavra</a> · 
          <a href="https://soundcloud.com/brendanvavra/slow-night-for-wind-quintet" title="Slow Night (for Wind Quintet)" target="_blank" style="color: #cccccc; text-decoration: none;">Slow Night (for Wind Quintet)</a>
      </div>` },
  { title: 'TRXHCEUEUIBB (THERUBIXCUBE)', year: '2007', 
    description: `This original composition for solo piano combines serialism with minimalism, inspired by the works of Milton Babbit and John Adams.
      <br/><br/>
      Performed by Brendon Shapiro at the Ithaca College Fall 2007 Student Composition Recital`, 
    embedHTML: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/993290824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
          <a href="https://soundcloud.com/brendanvavra" title="Brendan Vavra" target="_blank" style="color: #cccccc; text-decoration: none;">Brendan Vavra</a> · 
          <a href="https://soundcloud.com/brendanvavra/trxhceueuibb-therubixcube" title="TRXHCEUEUIBB (THERUBIXCUBE)" target="_blank" style="color: #cccccc; text-decoration: none;">TRXHCEUEUIBB (THERUBIXCUBE)</a>
      </div>` }
];