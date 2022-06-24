import React, {useState} from 'react';
import axios from 'axios';

export const Lyrics = () => {

//   const artistSong = `https://lyrics-plus.p.rapidapi.com/lyric/${song}/${artist}`
//   const [fistCharArtist, setFirstChartArtist] = useState("a")
  const [artist, setArtist ] = useState("")
  const [song, setSong ] = useState("")
  const [songResult, setSongResult] = useState("")
  const url = `https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`

const handleSubmit=(e)=>{
   e.preventDefault()
    const options = {
    method: 'GET',
    url: url ,
    // params: { firstChar: fistCharArtist },
    headers: {
      'X-RapidAPI-Key': '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67',
      'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com',
    },
  };
  console.log(options.url)

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setSongResult(response.data.lyrics)
    })
    .catch(function (error) {
      console.error(error);
    });
}


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Artist
            </label>
            <input
             id="artist"
             type="text"
             value={artist}
             onChange={(e) => setArtist(e.target.value)}/>
        </div>
        <div>
            <label>
                Song
            </label>
            <input
             id="song"
             type="text"
             value={song}
             onChange={(e) => setSong(e.target.value)}/>
        </div>
        <button type="submit">Search</button>
      </form>
      <>
      {songResult}
      </>
    </>
  );
};
