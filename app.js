const express = require('express');
const app = express();
const path = require('path');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Set static folder for assets like CSS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));


// Routes

  app.get('/', (req, res) => {
    const musicItems = [
      // Single Track Example
      {
        id: 'single0',
        type: 'single',
        title: 'Emerald (demo)',
        composer: 'hiautmski (Todd Brannon)',
        description: 'Original ambient instrumental guitar',
        audioSrc: '/audio/Emerald/Emerald_ruff1.wav',
        coverArt: '/images/cover_art/hiautmski_emerald_cover.mp4',
        platforms: {
          
        }
      },
      {
        id: 'single1',
        type: 'single',
        title: '26',
        composer: 'hiautmski (Todd Brannon)',
        description: 'Original ambient instrumental guitar',
        audioSrc: '/audio/26/26_Master_CDBaby.wav',
        coverArt: '/images/cover_art/26.png',
        platforms: {
          spotify: 'https://open.spotify.com/track/...',
          appleMusic: 'https://applemusic.com/...',
          soundcloud: 'https://soundcloud.com/...',
          bandcamp: 'https://soundcloud.com/...'
        }
      },
      {
        id: 'single2',
        type: 'single',
        title: 'Deep Calls to Deep',
        composer: 'Todd Brannon',
        description: 'Original rock instrumental guitar',
        audioSrc: '/audio/Deep/DeepCallsToDeep_Inst_Master.wav',
        coverArt: '/images/cover_art/DeepCallsToDeepSingleCover.jpeg',
        platforms: {
          spotify: 'https://open.spotify.com/track/...',
          appleMusic: 'https://applemusic.com/...',
          soundcloud: 'https://soundcloud.com/...',
          bandcamp: 'https://soundcloud.com/...'
        }
      },
      // Album Example
      {
        id: 'album1',
        type: 'album',
        title: 'Aural Archives I',
        composer: 'Todd Brannon',
        description: 'A collection of guitar driven alternative and rock beats',
        coverArt: '/images/cover_art/Aural Archives I.png',
        platforms: {
          spotify: 'https://open.spotify.com/album/...',
          appleMusic: 'https://music.apple.com/album/...',
          soundcloud: '',
          bandcamp: 'https://bandcamp.com/album/...'
        },
        tracks: [
          {
            title: 'High Tide',
            audioSrc: '/audio/AuralArchivesI/High Tide.mp3',
            // description: 'Description of Track 1',
            // duration: '3:45'
          },
          {
            title: 'Power Play',
            audioSrc: '/audio/AuralArchivesI/Power Play.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'September Shade',
            audioSrc: '/audio/AuralArchivesI/September Shade.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'Voices',
            audioSrc: '/audio/AuralArchivesI/Voices.mp3',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          // Add more tracks as needed
        ]
      },
      {
        id: 'album2',
        type: 'album',
        title: 'Aural Archives II',
        composer: 'Todd Brannon',
        description: 'A collection of guitar driven alternative and rock beats',
        coverArt: '/images/cover_art/Aural Archives II.png',
        platforms: {
          spotify: 'https://open.spotify.com/album/...',
          appleMusic: 'https://music.apple.com/album/...',
          soundcloud: '',
          bandcamp: 'https://bandcamp.com/album/...'
        },
        tracks: [
          {
            title: 'Awake',
            audioSrc: '/audio/AuralArchivesII/Awake_Master.mp3',
            // description: 'Description of Track 1',
            // duration: '3:45'
          },
          {
            title: 'Destination',
            audioSrc: '/audio/AuralArchivesII/Destination.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'Ignition',
            audioSrc: '/audio/AuralArchivesII/Ignition.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'Long Stretch',
            audioSrc: '/audio/AuralArchivesII/Long Stretch Master.mp3',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          // Add more tracks as needed
        ]
      },
      {
        id: 'album3',
        type: 'album',
        title: 'Aural Archives III',
        composer: 'Todd Brannon',
        description: 'A collection of guitar driven alternative and rock beats',
        coverArt: '/images/cover_art/Aural Archives III.png',
        platforms: {
          spotify: 'https://open.spotify.com/album/...',
          appleMusic: 'https://music.apple.com/album/...',
          soundcloud: '',
          bandcamp: 'https://bandcamp.com/album/...'
        },
        tracks: [
          {
            title: 'Frantic',
            audioSrc: '/audio/AuralArchivesIII/Frantic.m4a',
            // description: 'Description of Track 1',
            // duration: '3:45'
          },
          {
            title: 'Fruition',
            audioSrc: '/audio/AuralArchivesIII/Fruition.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'Making It',
            audioSrc: '/audio/AuralArchivesIII/MakingIt.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'Heart of Mine',
            audioSrc: '/audio/AuralArchivesIII/Heart of Mine (2020).m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          {
            title: 'Pave the Way',
            audioSrc: '/audio/AuralArchivesIII/Pave the Way.m4a',
            // description: 'Description of Track 2',
            // duration: '4:20'
          },
          // Add more tracks as needed
        ]
      },
      // Add more items as needed
    ];
  
    res.render('index', { musicItems });
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
