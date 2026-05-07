const data = JSON.parse(localStorage.getItem("dialedData"))


// <div class="brew-settings">
//     <h3>Brew settings</h3>
// </div>
// <div class="coffee-info">
//     <h3>Coffee info</h3>
// </div>
// <div class="water-composition">
//     <h3>Water composition</h3>
// </div>
// <div class="brew-preferences">
//     <h3>Brew preferences</h3>
// </div>

let brewSettingsData = [String, String]

let i = 0
for (key in data) {
    if (i < 4) {
        brewSettingsData[key] = data[key]
    }
    i+=1
}

console.log(brewSettingsData)



