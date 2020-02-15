/** @format */

const xhr = new XMLHttpRequest();

export function post(url: string, data: any) {
  xhr.open("post", url);
  xhr.send(data);
  return new Promise((res: any, rej: any) => {
    xhr.onreadystatechange = e => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        res(JSON.parse(xhr.response));
      }
      if (xhr.status > 201) {
        rej(xhr.response);
      }
    };
  });
}

export function get(url: string, data: any) {
  let result = url + "?";
  if (data) {
    for (let i in data) {
      result += `${i}=${data[i]}`;
    }
  }
  xhr.open("get", result);
  xhr.send();
  return new Promise((res: any, rej: any) => {
    xhr.onreadystatechange = e => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        res(JSON.parse(xhr.response));
      }
      if (xhr.status > 201) {
        rej(xhr.response);
      }
    };
  });
}
