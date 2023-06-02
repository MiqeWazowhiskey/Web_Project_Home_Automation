//wifi1
if (document.getElementById("wifi_switch_room1")) {
  let wifiSwitch1 = document.getElementById("wifi_switch_room1");

  wifiSwitch1.addEventListener("change", function () {
    localStorage.setItem("wifi1", this.checked);
  });

  let saveWifiSwitch1 = localStorage.getItem("wifi1");
  saveWifiSwitch1 !== null
    ? (wifiSwitch1.checked = saveWifiSwitch1 === "true")
    : (saveWifiSwitch1 = false);
}
//wifi3
if (document.getElementById("wifi_switch_room3")) {
  let wifiSwitch3 = document.getElementById("wifi_switch_room3");

  wifiSwitch3.addEventListener("change", function () {
    localStorage.setItem("wifi3", this.checked);
  });

  let saveWifiSwitch3 = localStorage.getItem("wifi3");
  saveWifiSwitch3 !== null
    ? (wifiSwitch3.checked = saveWifiSwitch3 === "true")
    : (saveWifiSwitch3 = false);
}
//wifi4
if (document.getElementById("wifi_switch_room4")) {
  let wifiSwitch4 = document.getElementById("wifi_switch_room4");

  wifiSwitch4.addEventListener("change", function () {
    localStorage.setItem("wifi4", this.checked);
  });

  let saveWifiSwitch4 = localStorage.getItem("wifi4");
  saveWifiSwitch4 !== null
    ? (wifiSwitch4.checked = saveWifiSwitch4 === "true")
    : (saveWifiSwitch4 = false);
}
//comp1
if (document.getElementById("computer_switch_room1")) {
  let compSwitch1 = document.getElementById("computer_switch_room1");

  compSwitch1.addEventListener("change", function () {
    localStorage.setItem("comp1", this.checked);
  });

  let saveCompSwitch1 = localStorage.getItem("comp1");
  saveCompSwitch1 !== null
    ? (compSwitch1.checked = saveCompSwitch1 === "true")
    : (saveCompSwitch1 = false);
}

//ac1 switch
if (document.getElementById("ac_switch_room1")) {
  let acSwitch1 = document.getElementById("ac_switch_room1");

  acSwitch1.addEventListener("change", function () {
    localStorage.setItem("ac1", this.checked);
  });

  let saveAcSwitch1 = localStorage.getItem("ac1");
  saveAcSwitch1 !== null
    ? (acSwitch1.checked = saveAcSwitch1 === "true")
    : (saveAcSwitch1 = false);
}
//ac3 switch
if (document.getElementById("ac_switch_room3")) {
  let acSwitch3 = document.getElementById("ac_switch_room3");

  acSwitch3.addEventListener("change", function () {
    localStorage.setItem("ac3", this.checked);
  });

  let saveAcSwitch3 = localStorage.getItem("ac3");
  saveAcSwitch3 !== null
    ? (acSwitch3.checked = saveAcSwitch3 === "true")
    : (saveAcSwitch3 = false);
}
//ac2 switch
if (document.getElementById("ac_switch_room2")) {
  let acSwitch2 = document.getElementById("ac_switch_room2");

  acSwitch2.addEventListener("change", function () {
    localStorage.setItem("ac2", this.checked);
  });

  let saveAcSwitch2 = localStorage.getItem("ac2");
  saveAcSwitch2 !== null
    ? (acSwitch2.checked = saveAcSwitch2 === "true")
    : (saveAcSwitch2 = false);
}
//lock1
if (document.getElementById("lock_switch_room1")) {
  let lockSwitch1 = document.getElementById("lock_switch_room1");

  lockSwitch1.addEventListener("change", function () {
    localStorage.setItem("lock1", this.checked);
  });

  let saveLockSwitch1 = localStorage.getItem("lock1");
  saveLockSwitch1 !== null
    ? (lockSwitch1.checked = saveLockSwitch1 === "true")
    : (saveLockSwitch1 = false);
}

//lock3
if (document.getElementById("lock_switch_room3")) {
  let lockSwitch3 = document.getElementById("lock_switch_room3");

  lockSwitch3.addEventListener("change", function () {
    localStorage.setItem("lock3", this.checked);
  });

  let saveLockSwitch3 = localStorage.getItem("lock3");
  saveLockSwitch3 !== null
    ? (lockSwitch3.checked = saveLockSwitch3 === "true")
    : (saveLockSwitch3 = false);
}
//lock4
if (document.getElementById("lock_switch_room4")) {
  let lockSwitch4 = document.getElementById("lock_switch_room4");

  lockSwitch4.addEventListener("change", function () {
    localStorage.setItem("lock4", this.checked);
  });

  let saveLockSwitch4 = localStorage.getItem("lock4");
  saveLockSwitch4 !== null
    ? (lockSwitch4.checked = saveLockSwitch4 === "true")
    : (saveLockSwitch4 = false);
}

//electric1
if (document.getElementById("electric_switch_room1")) {
  let electricSwitch1 = document.getElementById("electric_switch_room1");

  electricSwitch1.addEventListener("change", function () {
    localStorage.setItem("electric1", this.checked);
  });

  let saveElectricSwitch1 = localStorage.getItem("electric1");
  saveElectricSwitch1 !== null
    ? (electricSwitch1.checked = saveElectricSwitch1 === "true")
    : (saveElectricSwitch1 = false);
}

//electric3
if (document.getElementById("electric_switch_room3")) {
  let electricSwitch3 = document.getElementById("electric_switch_room3");

  electricSwitch3.addEventListener("change", function () {
    localStorage.setItem("electric3", this.checked);
  });

  let saveElectricSwitch3 = localStorage.getItem("electric3");
  saveElectricSwitch3 !== null
    ? (electricSwitch3.checked = saveElectricSwitch3 === "true")
    : (saveElectricSwitch3 = false);
}
//electric4
if (document.getElementById("electric_switch_room4")) {
  let electricSwitch4 = document.getElementById("electric_switch_room4");

  electricSwitch4.addEventListener("change", function () {
    localStorage.setItem("electric4", this.checked);
  });

  let saveElectricSwitch4 = localStorage.getItem("electric4");
  saveElectricSwitch4 !== null
    ? (electricSwitch4.checked = saveElectricSwitch4 === "true")
    : (saveElectricSwitch4 = false);
}
//lights room1
if (document.getElementById("room1-light-1")) {
  const rangeInput1 = document.getElementById("room1-light-1");

  rangeInput1.addEventListener("input", function () {
    localStorage.setItem("room1-range1", this.value);
  });

  const savedRange1 = localStorage.getItem("room1-range1");
  if (savedRange1 !== null) {
    rangeInput1.value = savedRange1;
  }
}

if (document.getElementById("room1-light-2")) {
  const rangeInput2 = document.getElementById("room1-light-2");

  rangeInput2.addEventListener("input", function () {
    localStorage.setItem("room1-range2", this.value);
  });

  const savedRange2 = localStorage.getItem("room1-range2");
  if (savedRange2 !== null) {
    rangeInput2.value = savedRange2;
  }
}

if (document.getElementById("room1-light-3")) {
  const rangeInput3 = document.getElementById("room1-light-3");

  rangeInput3.addEventListener("input", function () {
    localStorage.setItem("room1-range3", this.value);
  });

  const savedRange3 = localStorage.getItem("room1-range3");
  if (savedRange3 !== null) {
    rangeInput3.value = savedRange3;
  }
}
//lights room2
if (document.getElementById("room2-light-1")) {
  const rangeInput1 = document.getElementById("room2-light-1");

  rangeInput1.addEventListener("input", function () {
    localStorage.setItem("room2-range1", this.value);
  });

  const savedRange1 = localStorage.getItem("room2-range1");
  if (savedRange1 !== null) {
    rangeInput1.value = savedRange1;
  }
}

if (document.getElementById("room2-light-2")) {
  const rangeInput2 = document.getElementById("room2-light-2");

  rangeInput2.addEventListener("input", function () {
    localStorage.setItem("room2-range2", this.value);
  });

  const savedRange2 = localStorage.getItem("room2-range2");
  if (savedRange2 !== null) {
    rangeInput2.value = savedRange2;
  }
}

if (document.getElementById("room2-light-3")) {
  const rangeInput3 = document.getElementById("room2-light-3");

  rangeInput3.addEventListener("input", function () {
    localStorage.setItem("room2-range3", this.value);
  });

  const savedRange3 = localStorage.getItem("room2-range3");
  if (savedRange3 !== null) {
    rangeInput3.value = savedRange3;
  }
}
//lights room3
if (document.getElementById("room3-light-1")) {
  const rangeInput1 = document.getElementById("room3-light-1");

  rangeInput1.addEventListener("input", function () {
    localStorage.setItem("room3-range1", this.value);
  });

  const savedRange1 = localStorage.getItem("room3-range1");
  if (savedRange1 !== null) {
    rangeInput1.value = savedRange1;
  }
}

if (document.getElementById("room3-light-2")) {
  const rangeInput2 = document.getElementById("room3-light-2");

  rangeInput2.addEventListener("input", function () {
    localStorage.setItem("room3-range2", this.value);
  });

  const savedRange2 = localStorage.getItem("room3-range2");
  if (savedRange2 !== null) {
    rangeInput2.value = savedRange2;
  }
}

if (document.getElementById("room3-light-3")) {
  const rangeInput3 = document.getElementById("room3-light-3");

  rangeInput3.addEventListener("input", function () {
    localStorage.setItem("room3-range3", this.value);
  });

  const savedRange3 = localStorage.getItem("room3-range3");
  if (savedRange3 !== null) {
    rangeInput3.value = savedRange3;
  }
}
//lights-room4
if (document.getElementById("room4-light-1")) {
  const rangeInput1 = document.getElementById("room4-light-1");

  rangeInput1.addEventListener("input", function () {
    localStorage.setItem("room4-range1", this.value);
  });

  const savedRange1 = localStorage.getItem("room4-range1");
  if (savedRange1 !== null) {
    rangeInput1.value = savedRange1;
  }
}

if (document.getElementById("room4-light-2")) {
  const rangeInput2 = document.getElementById("room4-light-2");

  rangeInput2.addEventListener("input", function () {
    localStorage.setItem("room4-range2", this.value);
  });

  const savedRange2 = localStorage.getItem("room4-range2");
  if (savedRange2 !== null) {
    rangeInput2.value = savedRange2;
  }
}

if (document.getElementById("room4-light-3")) {
  const rangeInput3 = document.getElementById("room4-light-3");

  rangeInput3.addEventListener("input", function () {
    localStorage.setItem("room4-range3", this.value);
  });

  const savedRange3 = localStorage.getItem("room4-range3");
  if (savedRange3 !== null) {
    rangeInput3.value = savedRange3;
  }
}
//ac range 1
if (document.getElementById("degree-input-room1")) {
  const degreeInputRoom1 = document.getElementById("degree-input-room1");

  degreeInputRoom1.addEventListener("input", function () {
    localStorage.setItem("degree-input-room1", this.value);
  });

  const savedDegreeRoom1 = localStorage.getItem("degree-input-room1");
  if (savedDegreeRoom1 !== null) {
    degreeInputRoom1.value = savedDegreeRoom1;
  }
}
//ac range 2
if (document.getElementById("degree-input-room2")) {
  const degreeInputRoom2 = document.getElementById("degree-input-room2");

  degreeInputRoom2.addEventListener("input", function () {
    localStorage.setItem("degree-input-room2", this.value);
  });

  const savedDegreeRoom2 = localStorage.getItem("degree-input-room2");
  if (savedDegreeRoom2 !== null) {
    degreeInputRoom2.value = savedDegreeRoom2;
  }
}
