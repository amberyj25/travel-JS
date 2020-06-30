let data = "";
let loactionDataion = [];
let loactionDataionSelect = [];
const el = document.querySelector("#loactionSelect");
axios.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97").then((result) => {
  data = result.data.result.records;
  data.forEach((item) => {
    if (loactionDataionSelect.indexOf(item.Zone) == -1) {
      loactionDataionSelect.push(item.Zone)
    };
  });
}).then(function () {
  optionData()
}).then(function () {
  el.addEventListener("change", addLocation, false);
})
let optionData = function () {
  for (let i = 0; i < loactionDataionSelect.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${loactionDataionSelect[i]}`;
    el.appendChild(option);
  }
}
// innerHTML for str 外面 組字串 el.innerHTML=
const locationH2 = document.querySelector("#locationH2");
const locationUl = document.querySelector("#locationUl");
function addLocation(e) {
  locationH2.textContent = e.target.value;
  let str = "";
  data.forEach((item) => {
    if (item.Zone == e.target.value) {
      console.log(item);
      str += `<li>${item.Name}</li>`;
      locationUl.innerHTML = str;
    }
  })
}



