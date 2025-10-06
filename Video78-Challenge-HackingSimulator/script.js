const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  setInterval(() => {
    let last = document.body.lastElementChild;
    if(last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
    }
    else {
        last.innerHTML = last.innerHTML + "."
    }
  }, 700);

  let text = [
    "Initializing Hacking",
    "Reading your Files",
    "Password Detected",
    "Fetching Data",
    "Data Fetched Successfully",
    "Sending files to the Server",
    "PC hacked Successfully",
  ];

  for (const items of text) {
    await addItem(items);
  }
}
main();
