// data.js

const data = {
    siteTitle: 'Todd Brannon Music',
    hero: {
      title: 'Todd Q Brannon',
      subtitle: 'Guitarist | Composer | Producer',
      buttonText: 'Listen Now',
      buttonLink: '#music',
      videoSrc: '/images/video/HeroVideo.mp4',
      posterImage: '/images/video/HeroPoster.png'
    },
    musicItems: [
        // Single Track Example
        {
          id: 'single1',
          type: 'single',
          title: '26',
          composer: 'hiautmski (Todd Brannon)',
          description: 'Original ambient instrumental guitar',
          audioSrc: '/audio/26/26_Master_CDBaby.wav',
          coverArt: '/images/cover_art/26.png',
          platforms: {
            spotify: '',
            appleMusic: '',
            soundcloud: 'https://soundcloud.com/hiautmski/26a?si=d4123e95317742d79ca97036c2923770&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
            bandcamp: 'https://toddbrannon.bandcamp.com/track/26'
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
            // spotify: 'https://open.spotify.com/track/...',
            // appleMusic: 'https://applemusic.com/...',
            soundcloud: 'https://soundcloud.com/hiautmski/deep-calls-to-deep?si=7090a4356df84010b8de265a5556730b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
            bandcamp: 'https://toddbrannon.bandcamp.com/track/deep-calls-to-deep'
          }
        },
        {
            id: 'single3',
            type: 'single',
            title: 'Time Flies',
            composer: 'hiautmski (Todd Brannon)',
            description: 'Original rock instrumental guitar',
            audioSrc: '/audio/TimeFlies/TimeFlies(100624).mp3',
            coverArt: '/images/cover_art/time_flies.png',
            platforms: {
            //   spotify: 'https://open.spotify.com/track/...',
            //   appleMusic: 'https://applemusic.com/...',
              soundcloud: 'https://soundcloud.com/hiautmski/time-flies-demo?si=d1c75e46a7b1477888928c1c1a503f14&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
            //   bandcamp: 'https://soundcloud.com/...'
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
            spotify: '',
            appleMusic: '',
            soundcloud: '',
            bandcamp: ''
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
            spotify: '',
            appleMusic: '',
            soundcloud: '',
            bandcamp: ''
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
            spotify: '',
            appleMusic: '',
            soundcloud: '',
            bandcamp: ''
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
      ],
    // Add more content sections as needed
  };
  
  module.exports = data;
  