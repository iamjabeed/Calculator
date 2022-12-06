function insert(num) {
  let textView = document.querySelector(".textview");
  textView.value += num;
  // console.log(num);
}

function equals() {
  let textView = document.querySelector(".textview");
  textView.value = eval(textView.value);
}

function clean() {
  let textView = document.querySelector(".textview");
  textView.value = "";
}

function back() {
  document.querySelector(".textview").value = document
    .querySelector(".textview")
    .value.slice(0, -1);
}
