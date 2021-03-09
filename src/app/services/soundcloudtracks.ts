import { SafeResourceUrl } from '@angular/platform-browser';

export interface SoundCloudTrack {
  title: string;
  year: string;
  description: string;
  iframeSrcURI: string;
  trackURI: string;
  iframeSrcURL?: SafeResourceUrl;
  trackURL?: SafeResourceUrl;
  height?: string;
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
    iframeSrcURI:'playlists/23499189', trackURI: 'sets/vega', height: "450" },
  { title: 'Slow Night', year: '2009', 
    description: `This original piece for Wind Quintet was inspired by the painting in this image, which was created by my brother, Casey Vavra.
      <br/><br/>
      Performed at the Ithaca College Spring 2009 Student Composition Recital`, 
    iframeSrcURI:'tracks/996417265', trackURI: 'slow-night-for-wind-quintet' },
  { title: 'TRXHCEUEUIBB (THERUBIXCUBE)', year: '2007', 
    description: `This original composition for solo piano combines serialism with minimalism, inspired by the works of Milton Babbit and John Adams.
      <br/><br/>
      Performed by Brendon Shapiro at the Ithaca College Fall 2007 Student Composition Recital`, 
    iframeSrcURI:'tracks/993290824', trackURI: 'trxhceueuibb-therubixcube' }
];