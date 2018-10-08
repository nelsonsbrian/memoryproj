var selection1 = "";
var selection2 = "";


export function compareCard() {
  return selection1 === selection2;
} 

export function addSelection(card) {
  if (selection1 === "")
  {
    selection1 = card;
  } else {
    selection2 = card;
  }
}

export function gameStatus() {
  if (selection1 === "" && selection2 === "")
  {
    return 1;
  } else if (selection2 === "") {
    return 2;
  } else {
    return 3;
  }
}

export function clearCard() {
  selection1 = '';
  selection2 = '';
}