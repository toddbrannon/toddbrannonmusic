const express = require('express');
const app = express();
const path = require('path');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Set static folder for assets like CSS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    const tracks = [
      {
        title: '26',
        composer: 'hiautmski (Todd Brannon)',
        description: 'Original ambient instrumental guitar',
        audioSrc: '/audio/26_Master_CDBaby.wav',
        coverArt: '/images/cover_art/26.png',
        platforms: {
          spotify: 'https://open.spotify.com/track/...',
          appleMusic: 'https://applemusic.com/...',
          soundcloud: 'https://soundcloud.com/...',
          bandcamp: 'https://soundcloud.com/...'
        }
      },
      // Add more tracks as needed
      {
        title: 'Deep Calls to Deep',
        composer: 'Todd Brannon',
        description: 'Original rock instrumental guitar',
        audioSrc: '/audio/DeepCallsToDeep_Inst_Master.wav',
        coverArt: '/images/cover_art/DeepCallsToDeepSingleCover.jpeg',
        platforms: {
          spotify: 'https://open.spotify.com/track/...',
          appleMusic: 'https://applemusic.com/...',
          soundcloud: 'https://soundcloud.com/...',
          bandcamp: 'https://soundcloud.com/...'
        }
      },
    ];
    res.render('index', { tracks });
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
