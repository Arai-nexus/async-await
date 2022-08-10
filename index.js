/**
 * async await
 */
async function callApi() {
  //実際にAPIを叩く処理
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}
callApi();

/**
 * fetch thenの書き換え
 */
// function callApi() {
//   //実際にAPIを叩く処理
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (users) {
//       console.log(users);
//     });
// }
// callApi();

/**
 * XMLHttpRequestの書き換え
 * 昔の使い方で今は使うことない。
 * しかしながら、進捗が分かるので、
 * ファイルをアップロードするメニューを作る場合はあるが、あまり覚えなくてよい
 */
// function callApi() {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = function () {
//     console.log(xhr.response);
//   };
// }
// callApi();
