function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let lastId = 0;

function createBoxes(amount){
  for(let i = 0; i < amount; i++){
    const el = document.createElement("div");
    el.style.backgroundColor = getRandomHexColor();
    el.style.width = 30 + lastId * 10 + "px";
    el.style.height = 30 + lastId * 10 + "px";
    lastId++;
    el.id="box"+lastId+"box";
    output.insertAdjacentElement("afterbegin", el);
  }
}

function destroyBoxes(){
  while(output.children.length!=0){
    const box = output.lastChild;
    box.remove();
  };
  lastId=0;
}

const input = document.querySelector("#controls");
const inputValue = input.children[0];
const inputCreate = input.children[1];
const inputDestroy = input.children[2];
const output = document.querySelector("#boxes");

inputCreate.addEventListener("click", click=>{
  createBoxes(inputValue.value);
});

inputCreate.click();

inputDestroy.addEventListener("click", click => {
  destroyBoxes();
})

inputDestroy.click();