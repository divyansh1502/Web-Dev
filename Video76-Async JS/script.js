// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 8000);
//   });
// }

//settle means resolve or reject
//resolve means promise has settled successful
//resolve means promise has not settled successful

async function getData() {
  let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json
      console.log(x)
      return 455

}
async function main() {
  console.log("Loading Modules");
  console.log("Do something else");
  console.log("Load DATA");

  let data = await getData();

  console.log(data);
  console.log("Process DATA");
  console.log("Task 2");
}
main();
// data.then((v)=>{
//     console.log(data);
//     console.log("Process DATA");
//     console.log("Task 2");
// })
