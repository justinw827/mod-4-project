class Adapter {

  static getVideos(url){
    return fetch(url).then(r => r.json())
  }
}

export default Adapter
