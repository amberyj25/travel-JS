let data = "";
let loactionDataion = [];
let loactionDataionSelect = [];
const el = document.querySelector("#loactionSelect");
const hotlocationUl = document.querySelector(".hotlocation ul");
axios.get("https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json").then((result) => {
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
      <div class="locationImage" style="background:url(${item.Picture1});background-size:cover;">
        <h4>${item.Name}</h4>
      </div>
        <div class="locationContent">
        <p><i class="far fa-clock" style="margin-right:10px;"></i><span>${item.Opentime}</span></p>
        <p><i class="fas fa-map-marker-check" style="margin-right:10px;"></i><span>${item.Add}</span></p>
        <p><i class="fas fa-phone-alt" style="margin-right:10px;"></i><span>${item.Tel}</span></p>
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
      <div class="locationImage" style="background:url(${item.Picture1});background-size:cover;">
        <h4>${item.Name}</h4>
      </div>
        <div class="locationContent">
        <p><i class="far fa-clock" style="margin-right:10px;"></i><span>${item.Opentime}</span></p>
        <p><i class="fas fa-map-marker-check" style="margin-right:10px;"></i><span>${item.Add}</span></p>
        <p><i class="fas fa-phone-alt" style="margin-right:10px;"></i><span>${item.Tel}</span></p>
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
      <div class="locationImage" style="background:url(${item.Picture1});background-size:cover;">
        <h4>${item.Name}</h4>
      </div>
        <div class="locationContent">
        <p><i class="far fa-clock" style="margin-right:10px;"></i><span>${item.Opentime}</span></p>
        <p><i class="fas fa-map-marker-check" style="margin-right:10px;"></i><span>${item.Add}</span></p>
        <p><i class="fas fa-phone-alt" style="margin-right:10px;"></i><span>${item.Tel}</span></p>
        </div>
      </li>`;
        locationUl.innerHTML = str;
      }
    })
  }
}
let a1 = 5;
function a2() {
  console.log(a1)
}
a2();
// select 用value
// li textContent