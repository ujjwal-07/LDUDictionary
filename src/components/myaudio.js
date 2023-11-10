import React from 'react'
import Song from "../music/Akon - Smack That (Official Music Video) ft. Eminem.mp3"
export default function myaudio(props) {
  return (
    <div>
<audio controls>
  <source src={Song} type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
        
    </div>
  )
}
