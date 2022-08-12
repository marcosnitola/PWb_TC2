let textIn;
let textBtnAdd;
let textList;
let textBtnDel;
let listCount = 0;
let isDeletingActive = false;

function toggleDel() {
	if (isDeletingActive) {
		isDeletingActive = false;
		textBtnDel.innerHTML = "Borrar";
		textList.classList.add("onDeletion");
	} else if (!isDeletingActive) {
		isDeletingActive = true;
		textBtnDel.innerHTML = "PULSA PARA BORRAR";
		textList.classList.remove("onDeletion");
	}
}

function toLowerC() {
	if (textIn.value.length > 0) {
		let txtLW = textIn.value.toLowerCase();
		createItemList(txtLW);
		textIn.value = "";
	}
}

function createItemList(txt) {
	// textList.innerHTML += "<li id='itemLs"+listCount+"'>"+txt
	let content = document.createTextNode(txt);
	let newItemList = document.createElement("li");
	newItemList.setAttribute("id", "itemLs"+listCount);
	newItemList.appendChild(content);
	textList.appendChild(newItemList);
	newItemList.onclick = function () {
		if (isDeletingActive) {
			this.parentNode.removeChild(this);
		}
	}
	listCount++;
}

function init() {
	textIn = document.getElementById('textIn');
	textBtnAdd = document.getElementById('textBtnAdd');
	textList = document.getElementById('textList');
	textBtnDel = document.getElementById('textBtnDel');

	textBtnAdd.onclick = toLowerC;
	textBtnDel.onclick = toggleDel;
}
