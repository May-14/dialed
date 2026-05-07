const data = JSON.parse(localStorage.getItem("dialedData"))

const { brewSettings, coffeeInfo, waterComposition, brewPreferences } = data


const brewSettingSection = document.querySelector("div.brew-settings")
const coffeeInfoSection = document.querySelector("div.coffee-info")
const waterCompositionSection = document.querySelector("div.water-composition")
const brewPreferencesSection = document.querySelector("div.brew-preferences")

function populateSection(dataObject, targetSection) {
    if (!dataObject) return
    for (const [key, value] of Object.entries(dataObject)) {
        if (value === null || value === '' || value.length === 0) continue
        const formattedKey = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
        const formattedValue = Array.isArray(value) ? value.join(', ') : value
        const p = document.createElement('p')
        p.innerHTML = `<strong>${formattedKey}:</strong> ${formattedValue}`
        targetSection.appendChild(p)
    }
}

populateSection(brewSettings, brewSettingSection)
populateSection(coffeeInfo, coffeeInfoSection)
populateSection(waterComposition, waterCompositionSection)
populateSection(brewPreferences, brewPreferencesSection)



