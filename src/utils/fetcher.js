import Config from "../Config";

export default function(url, method = 'GET', data, headers) {
  return new Promise((resolve, reject) => {
    let _headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    };

    if (headers) {
      if (headers['Content-Type']){
        _headers['Content-Type'] = headers['Content-Type'];
      }
      _headers = {..._headers, headers};
    }

    let options = {
      method: method,
      body: JSON.stringify(data),
      cors: true,
      // headers: _headers
    };

    let good_codes = [200, 201];

    fetch(`${Config.API}/${url}`, options)
      .then(async (res) => {
        if(good_codes.indexOf(res.status) + 1 === 0) {
          let data = await res.json(res);
          reject({ status: res.status, statusText: res.statusText, error: data.error || '' });
        } else {
          return res.json(res)
        }
      })
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
}