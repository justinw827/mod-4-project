class Adapter {

  static getVideos(url) {
    return fetch(url).then(r => r.json())
  }

  static getLocalVideoLikes(id) {
    return fetch(`http://localhost:3001/api/v1/videos/${id}/likes`).then(r => r.json())
  }
}

export default Adapter
