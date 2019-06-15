import React from 'react';

class SpotifyTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      recentlyPlayed: {},
      spotifyInfo: {}
    };
  }

  escape = (val) => {
    if (typeof(val)!="string") return val;
    return val      
        .replace(/[\\]/g, '')
        .replace(/[\/]/g, '')
        .replace(/[\b]/g, '')
        .replace(/[\f]/g, '')
        .replace(/[\n]/g, '')
        .replace(/[\r]/g, '')
        .replace(/[\t]/g, '')
        .replace(/[\"]/g, '')
        .replace(/\\'/g, '')
        .replace(/[\']/g, '');
  }

  componentDidMount() {
    fetch(process.env.LASTFM_URL)
    .then(response => response.json())
    .then((res) => {
      this.setState({
        recentlyPlayed: res
      });

      const title = this.escape(res.name);
      const album = this.escape(res.album["#text"]);
      const artist = this.escape(res.artist["#text"]);

      var url = `${process.env.SPOTIFY_TRACK}?title=${title}&artist=${artist}&album=${album}`

      fetch(url)
      .then(response => response.json())
      .then((res) => {

        const link = res.external_urls.spotify;
        const imgSrc = res.album.images[0].url;
        const artists = res.artists || res.artist;
        const trackName = res.name;
        const album = res.album.name;

        const trackState = {
          link,
          imgSrc,
          artists,
          trackName,
          album
        }

        this.setState({
          spotifyInfo: trackState
        })
      })
    });
  }

  render() {
    const {recentlyPlayed, spotifyInfo} = this.state;
    return(
      <div style={{width: "100%"}}>
        <p style={{marginBottom: "2%", fontWeight: 700, fontFamily: 'Playfair-Display, serif', color: '#002253', fontSize: '1.25em'}}>What am I listening to?</p>
          {
            spotifyInfo &&
            <a href={spotifyInfo.link} style={{display: "flex"}}>
              <img src={spotifyInfo.imgSrc} class="spotify-album"/>
              <div class="spotify-meta">
                <p style={{fontWeight: 700}}>Track: {spotifyInfo.trackName}</p>
                <p> {spotifyInfo.artists && spotifyInfo.artists.length > 1 ? 'Artists: ' : 'Artist: '}
                  {
                    spotifyInfo.artists &&
                    spotifyInfo.artists.map((artist, i) => {
                      if(i === 0) {
                        return <span key={artist.name}>{artist.name}</span>
                      } else {
                        return <span key={artist.name}>, {artist.name}</span>
                      }
                    })
                  }
                </p>
                <p>Album: {spotifyInfo.album}</p>
                <p>
                  {
                    recentlyPlayed && spotifyInfo
                    ?
                      recentlyPlayed['@attr']
                        ?
                        'Currently listening!'
                        :
                        `Last played: ${recentlyPlayed.date && recentlyPlayed.date['#text']}`
                    :
                      null
                  }
                </p>
              </div>
            </a>
          }
      </div>
    )
  }
}

export default SpotifyTrack