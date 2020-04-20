export default  class CommonService {
  data = [
    {id: 1, title: 'AyNur'},
    {id: 2, title: 'Ilmira'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error( 'Something bad happened'));
        } else {
          return resolve(this.data)
        }
      }, 1000)
    })
  }
}