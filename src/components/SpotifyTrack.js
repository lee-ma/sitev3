import React from 'react';

class SpotifyTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      recentlyPlayed: null,
      spotifyInfo: null
    };
  }

  escape = (val) => {
    if (typeof(val)!="string") return val;
    return val      
        .replace(/[\\]/g, '')
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
    fetch(process.env.GATSBY_LASTFM_URL)
    .then(response => response.json())
    .then((res) => {
      this.setState({
        recentlyPlayed: res
      });

      const title = this.escape(res.name);
      const album = this.escape(res.album["#text"]);
      const artist = this.escape(res.artist["#text"]);

      var url = `${process.env.GATSBY_SPOTIFY_TRACK}?title=${title}&artist=${artist}&album=${album}`

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
      <div style={{marginTop: "5%"}}>
        <h1>Recently Played Song</h1>
          {
            spotifyInfo &&
            <a href={spotifyInfo.link} style={{display: "flex", overflow: "scroll", marginTop: "1%"}} target="_blank">
              <img src={spotifyInfo.imgSrc} className="spotify-album"/>
              <div className="spotify-meta">
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
                        'Currently playing!'
                        :
                        `Last played: ${recentlyPlayed.date && new Date(recentlyPlayed.date['#text'] + " UTC").toLocaleString()}`
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