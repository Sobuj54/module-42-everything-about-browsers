const dharDe = () => {
  alert("amare 500 taka dhar de");
};

const dharKiDibi = () => {
  // confirm gives yes or cancel option...also has a return value which we can store
  const result = confirm("tui ki amare 500 taka dhar dite parbi?");
  console.log(result);
  if (result === true) {
    alert("tui amar ashol friend");
  } else {
    alert("tui blocked");
  }
};

const getInfo = () => {
  // prompt provides an input field..prompt also has a return value which we can store
  const name = prompt("give your name.");

  if (name === null) {
    alert("give your name again");
  } else {
    console.log(name);
  }
};
