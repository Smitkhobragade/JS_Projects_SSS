const colorbox = document.querySelector(".screen");
const colorInput = document.querySelector(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy-code");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

const refresh_fun = (genrandom) => {
  if(genrandom){
    colorInput.value = getRandomColor();
  }
  console.log(`${colorInput.value}`);
    const background1 = `${colorInput.value}`;
    colorbox.style.background = colorInput.value;
    tempColor = colorInput.value;
    textarea.value = `background-color : ${background1};`;
}

colorInput.addEventListener("input",()=>refresh_fun(false));

const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = 'Code Copied !';
  copyBtn.style.backgroundColor = "#fff";
  copyBtn.style.fontWeight = "bolder";
  setTimeout(()=> copyBtn.innerText = 'Copy Code',1600);
  setTimeout(()=> copyBtn.style.background = "#ffffff00",1600);
  setTimeout(()=> copyBtn.style.fontWeight = "normal",1600);
}

copyBtn.addEventListener("click", copyCode);
refreshBtn.addEventListener("click",()=>refresh_fun(true));