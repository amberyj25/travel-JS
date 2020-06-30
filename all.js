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
})
let optionData = function () {
  for (let i = 0; i < loactionDataionSelect.length; i++) {
    let option = document.createElement("option");
    option.textContent = `${loactionDataionSelect[i]}`;
    el.appendChild(option);
  }
}




