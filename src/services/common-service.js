import fetcher from '../utils/fetcher'

export default  class CommonService {

  async getPosts() {
    return await fetcher('posts?_limit=10', 'GET')
  }

  async getNewExhibitions() {
    return await fetcher('photos?_limit=3', 'GET')
  }
}