// public/js/audio-control.js

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayers = document.querySelectorAll('audio');
  
    audioPlayers.forEach(function (audio) {
      audio.addEventListener('play', function () {
        // Pause other audio elements
        audioPlayers.forEach(function (otherAudio) {
          if (otherAudio !== audio) {
            otherAudio.pause();
  
            // Remove 'playing' class from other elements
            const otherParent = otherAudio.closest('.track') || otherAudio.closest('.music-card');
            if (otherParent) {
              otherParent.classList.remove('playing');
            }
          }
        });
  
        // Add 'playing' class to the appropriate parent element
        const parentTrack = audio.closest('.track');
        if (parentTrack) {
          // It's a track within an album
          parentTrack.classList.add('playing');
        } else {
          // It's a single
          const parentMusicCard = audio.closest('.music-card');
          if (parentMusicCard) {
            parentMusicCard.classList.add('playing');
          }
        }
      });
  
      // Remove 'playing' class when audio is paused
      audio.addEventListener('pause', function () {
        const parentTrack = audio.closest('.track');
        if (parentTrack) {
          parentTrack.classList.remove('playing');
        } else {
          const parentMusicCard = audio.closest('.music-card');
          if (parentMusicCard) {
            parentMusicCard.classList.remove('playing');
          }
        }
      });
  
      // Remove 'playing' class when audio ends
      audio.addEventListener('ended', function () {
        const parentTrack = audio.closest('.track');
        if (parentTrack) {
          parentTrack.classList.remove('playing');
        } else {
          const parentMusicCard = audio.closest('.music-card');
          if (parentMusicCard) {
            parentMusicCard.classList.remove('playing');
          }
        }
      });
    });
  });
  