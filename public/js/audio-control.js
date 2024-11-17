// public/js/audio-control.js

document.addEventListener('DOMContentLoaded', function () {
  const audioPlayers = document.querySelectorAll('audio');

  // Handle direct links to tracks
  if (window.location.hash) {
    const trackId = window.location.hash.substring(1);
    const trackElement = document.getElementById(trackId);
    if (trackElement) {
      trackElement.scrollIntoView({ behavior: 'smooth' });
      trackElement.classList.add('highlight');
      setTimeout(() => {
        trackElement.classList.remove('highlight');
      }, 2000);
    }
  }

  // Audio player control functionality
  audioPlayers.forEach(function (audio) {
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePlaybackEnd);
    audio.addEventListener('ended', handlePlaybackEnd);
  });

  function handlePlay() {
    audioPlayers.forEach(otherAudio => {
      if (otherAudio !== this) {
        otherAudio.pause();
        updatePlayingState(otherAudio, false);
      }
    });
    updatePlayingState(this, true);
  }

  function handlePlaybackEnd() {
    updatePlayingState(this, false);
  }

  function updatePlayingState(audioElement, isPlaying) {
    const parentTrack = audioElement.closest('.track');
    const parentMusicCard = audioElement.closest('.music-card');
    const parent = parentTrack || parentMusicCard;

    if (parent) {
      if (isPlaying) {
        parent.classList.add('playing');
      } else {
        parent.classList.remove('playing');
      }
    }
  }

  // Track sharing functionality
  window.copyTrackLink = async function(title) {
    const baseUrl = window.location.origin;
    const safeTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
    const trackUrl = `${baseUrl}/#${safeTitle}`;
    
    try {
      await navigator.clipboard.writeText(trackUrl);
      showCopyFeedback(true);
    } catch (err) {
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = trackUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      
      try {
        textArea.select();
        const successful = document.execCommand('copy');
        if (successful) {
          showCopyFeedback(true);
        } else {
          showCopyFeedback(false);
        }
      } catch (err) {
        showCopyFeedback(false);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  function showCopyFeedback(success) {
    // Find the clicked button
    const copyBtn = event.currentTarget;
    const originalContent = copyBtn.innerHTML;
    
    if (success) {
      // Show success feedback
      copyBtn.innerHTML = '<img src="/images/icons/check.svg" alt="Copied" class="share-icon">';
      setTimeout(() => {
        copyBtn.innerHTML = originalContent;
      }, 2000);
    } else {
      // Show error feedback
      const errorMessage = document.createElement('div');
      errorMessage.className = 'copy-error-tooltip';
      errorMessage.textContent = 'Unable to copy. Right-click to copy link manually.';
      copyBtn.appendChild(errorMessage);
      
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    }
  }

  // Optional: Native share functionality for mobile devices
  window.nativeShare = function(trackId, title, composer) {
    if (navigator.share) {
      const baseUrl = window.location.origin;
      const trackUrl = `${baseUrl}/#${trackId}`;
      
      navigator.share({
        title: `${title} by ${composer}`,
        text: `Check out "${title}" by ${composer}`,
        url: trackUrl
      }).catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback to copy link if native sharing is not available
      copyTrackLink(trackId);
    }
  };
});