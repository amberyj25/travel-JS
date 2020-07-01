let data = "";
let loactionDataion = [];
let loactionDataionSelect = [];
const el = document.querySelector("#loactionSelect");
const hotlocationUl = document.querySelector(".hotlocation ul");
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
  dataDefault();
  el.addEventListener("change", addLocation, false);
  hotlocationUl.addEventListener("click", hotlocationAdd, false)
});
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
let dataDefault = function () {
  let str = "";
  data.forEach((item) => {
    if (item.Zone == "三民區") {
      str += `<li>
      <div class="locationImage" style="background:url(${item.Picture1});background-size:contain;">
        <h4>${item.Name}</h4>
      </div>
        <div class="locationContent">
        <p><i class="far fa-clock"></i><span>${item.Opentime}</span></p>
        <p><i class="fas fa-map-marker-check"></i><img src=""><span>${item.Add}</span></p>
        <p><i class="fas fa-phone-alt"></i><img src=""><span>${item.Tel}</span></p>
        </div>
      </li>`;
      locationUl.innerHTML = str;
    }
  })
};
function addLocation(e) {
  locationH2.textContent = e.target.value;
  let str = "";
  data.forEach((item) => {
    if (item.Zone == e.target.value) {
      str += `<li>
      <div class="locationImage" style="background:url(${item.Picture1});background-size:contain;">
        <h4>${item.Name}</h4>
      </div>
        <div class="locationContent">
        <p>${item.Opentime}</p>
        <p>${item.Add}</p>
        <p>${item.Tel}</p>
        </div>
      </li>`;
      locationUl.innerHTML = str;
    }
  })
}
function hotlocationAdd(e) {
  if (e.target.nodeName == "A") {
    locationH2.textContent = e.target.textContent;
    let str = "";
    data.forEach((item) => {
      if (item.Zone == e.target.textContent) {
        str += `<li>
      <div class="locationImage" style="background:url(${item.Picture1});background-size:contain;">
        <h4>${item.Name}</h4>
      </div>
        <div class="locationContent">
        <p>${item.Opentime}</p>
        <p>${item.Add}</p>
        <p>${item.Tel}</p>
        </div>
      </li>`;
        locationUl.innerHTML = str;
      }
    })
  }
}
// select 用value
// li textContent