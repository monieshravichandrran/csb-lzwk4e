const nameCheck = () => {
  document.getElementById("names").style.borderBottom = "1px solid white";
  let name = document.getElementById("names").value;
  if (name) {
    let x = name.match(/^[a-z A-Z]+$/);
    if (!x) {
      document.getElementById("er1").style.display = "block";
    }
  } else {
    document.getElementById("req1").style.display = "block";
  }
};

const clgCheck = () => {
  document.getElementById("clg").style.borderBottom = "1px solid";
  let name = document.getElementById("clg").value;
  if (name) {
    let x = name.match(/^[a-z A-Z]+$/);
    if (!x) {
      document.getElementById("er2").style.display = "block";
    }
  } else {
    document.getElementById("req2").style.display = "block";
  }
};

const nameFocus = () => {
  document.getElementById("req1").style.display = "none";
  document.getElementById("er1").style.display = "none";
  document.getElementById("names").style.borderBottom = "3px solid #90EE90";
};

const clgFocus = () => {
  document.getElementById("req2").style.display = "none";
  document.getElementById("er2").style.display = "none";
  document.getElementById("clg").style.borderBottom = "3px solid #90EE90";
};

const selectAddress = () => {
  let name = document.getElementById("textaid").value;
  if (name) alert("The Entered Address " + name);
  else alert("OOPS!!! You have not entered the address");
};

const pinBlur = () => {
  document.getElementById("pin").style.borderBottom = "1px solid";
  let name = document.getElementById("pin").value;
  if (name) {
    let x = name.match(/^[0-9]{6}$/);
    if (!x) {
      document.getElementById("er3").style.display = "block";
    }
  } else {
    document.getElementById("req3").style.display = "block";
  }
};

const pinFocus = () => {
  document.getElementById("req3").style.display = "none";
  document.getElementById("er3").style.display = "none";
  document.getElementById("pin").style.borderBottom = "3px solid #90EE90";
};

const ageKey = (event) => {
  const x = event.keyCode;
  console.log(x);
  if (x >= 49 && x <= 57) {
    console.log("Valid");
  } else {
    alert("You have not entered a number. Re-Enter kindly");
  }
};

const ageFocus = () => {
  document.getElementById("req4").style.display = "none";
  document.getElementById("er4").style.display = "none";
  document.getElementById("aged").style.borderBottom = "3px solid #90EE90";
};

const ageBlur = () => {
  document.getElementById("aged").style.borderBottom = "1px solid";
};

const phoneBlur = () => {
  document.getElementById("pho").style.borderBottom = "1px solid";
};

const phoneFocus = () => {
  document.getElementById("req5").style.display = "none";
  document.getElementById("er5").style.display = "none";
  document.getElementById("pho").style.borderBottom = "3px solid #90EE90";
};

function dragskill(ev) {
  console.log(ev.target.id);
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  console.log(ev);
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
  ev.preventDefault();
}

const reset = () => {
  document.getElementById("names").value = undefined;
  document.getElementById("clg").value = undefined;
  document.getElementById("textaid").value = undefined;
  document.getElementById("pin").value = undefined;
  document.getElementById("aged").value = undefined;
  document.getElementById("dob").value = undefined;
  document.getElementById("pho").value = undefined;
  document.getElementById("emai").value = undefined;
  document.getElementById("consent").value = undefined;
  document.getElementById("skillid").innerHTML = "";
  document.getElementById("skillsd").value = `
  <ul class="listskill">
  <li id="skid1" class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    C++
  </li>
  <li
    id="skid2"
    class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    JS
  </li>
  <li
    id="skid3"
    class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    React
  </li>
  <li
    id="skid4"
    class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    Python
  </li>
  <li
    id="skid5"
    class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    NodeJS
  </li>
  <li
    id="skid6"
    class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    SQL
  </li>
  <li
    id="skid7"
    class="listitemskill"
    draggable="true"
    ondragstart="dragskill(event)"
  >
    MongoDB
  </li>
</ul>`;
};

const validate = () => {
  const er1 = document.getElementById("er1").style.display == "none";
  const req1 = document.getElementById("req1").style.display == "none";
  const er2 = document.getElementById("er2").style.display == "none";
  const req2 = document.getElementById("req2").style.display == "none";
  const er3 = document.getElementById("er3").style.display == "none";
  const req3 = document.getElementById("req3").style.display == "none";
  const er4 = document.getElementById("er4").style.display == "none";
  const req4 = document.getElementById("req4").style.display == "none";
  const er5 = document.getElementById("er5").style.display == "none";
  const req5 = document.getElementById("req5").style.display == "none";
  const er6 = document.getElementById("req6").style.display == "none";
  const req6 = document.getElementById("req6").style.display == "none";
  return (
    er1 &&
    er2 &&
    er3 &&
    er4 &&
    er5 &&
    er6 &&
    req1 &&
    req2 &&
    req3 &&
    req4 &&
    req5 &&
    req6
  );
};

const submit = () => {
  document.getElementById("toterr").style.display = "none";
  const x1 = document.getElementById("names").value;
  const x2 = document.getElementById("clg").value;
  const x3 = document.getElementById("textaid").value;
  const x4 = document.getElementById("pin").value;
  const x5 = document.getElementById("aged").value;
  const x6 = document.getElementById("dob").value;
  const x7 = document.getElementById("pho").value;
  const x8 = document.getElementById("emai").value;
  const x9 = document.getElementById("consent").value;
  const x10 = document.getElementById("skillid").innerHTML;
  if (
    x1 != undefined &&
    x2 != undefined &&
    x3 != undefined &&
    x4 != undefined &&
    x5 != undefined &&
    x6 != undefined &&
    x7 != undefined &&
    x8 != undefined &&
    x9 != undefined
  )
    document.getElementById("toterr").style.display = "block";
  else {
    const check = validate();
    if (check) {
    } else {
      document.getElementById("toterr").style.display = "block";
    }
  }
};
