let brewBtn = document.querySelector("#brew-btn")

window.addEventListener('DOMContentLoaded', () => {
    const rawData = localStorage.getItem("dialedData")
    if (!rawData) return 
    const data = JSON.parse(rawData)
    const setInput = (id, value) => {
        if (value !== null && value !== "") {
            const element = document.querySelector(`#${id}`)
            if (element) element.value = value
        }
    }
    const setRadio = (name, value) => {
        if (value !== null) {
            const element = document.querySelector(`input[name="${name}"][value="${value}"]`)
            if (element) element.checked = true
        }
    }
    const setCheckboxes = (name, valuesArray) => {
        if (Array.isArray(valuesArray)) {
            valuesArray.forEach(val => {
                const element = document.querySelector(`input[name="${name}"][value="${val}"]`)
                if (element) element.checked = true
            })
        }
    }
    if (data.brewSettings) {
        setRadio('method', data.brewSettings.method)
        setCheckboxes('machine-capabilities', data.brewSettings.machineCapabilities)
        setCheckboxes('available-equipment', data.brewSettings.availableEquipment)
        setInput('user-elevation', data.brewSettings.userElevation)
    }
    if (data.coffeeInfo) {
        setRadio('origin', data.coffeeInfo.origin)
        setRadio('varietal', data.coffeeInfo.varietal)
        setRadio('roast-input', data.coffeeInfo.roastInput)
        setRadio('visual-roast-input', data.coffeeInfo.visualRoast)
        setInput('agtron-value', data.coffeeInfo.agtronValue)
        setRadio('process', data.coffeeInfo.process)
        setInput('age', data.coffeeInfo.age)
        setInput('bean-elevation', data.coffeeInfo.beanElevation)
    }
    if (data.waterComposition) {
        setInput('ph', data.waterComposition.ph)
        setInput('tds', data.waterComposition.tds)
        setRadio('gh', data.waterComposition.gh)
        setRadio('kh', data.waterComposition.kh)
    }
    if (data.brewPreferences) {
        setInput('acidity', data.brewPreferences.acidity)
        setInput('sweetness', data.brewPreferences.sweetness)
        setInput('body', data.brewPreferences.body)
        setInput('clarity-balance', data.brewPreferences.clarityBalance)
    }
})

brewBtn.addEventListener("click", () => {
    const formData = collectFormData()
    localStorage.setItem("dialedData", JSON.stringify(formData))
    window.location = "brew.html"
})

function collectFormData() {
    return {
        brewSettings: {
            method: document.querySelector('input[name="method"]:checked')?.value ?? null,
            machineCapabilities: [...document.querySelectorAll('input[name="machine-capabilities"]:checked')].map(el => el.value),
            availableEquipment: [...document.querySelectorAll('input[name="available-equipment"]:checked')].map(el => el.value),
            userElevation: document.querySelector('#user-elevation')?.value ?? null,
        },
        coffeeInfo: {
            origin: document.querySelector('input[name="origin"]:checked')?.value ?? null,
            varietal: document.querySelector('input[name="varietal"]:checked')?.value ?? null,
            roastInput: document.querySelector('input[name="roast-input"]:checked')?.value ?? null,
            visualRoast: document.querySelector('input[name="visual-roast-input"]:checked')?.value ?? null,
            agtronValue: document.querySelector('#agtron-value')?.value ?? null,
            process: document.querySelector('input[name="process"]:checked')?.value ?? null,
            age: document.querySelector('#age')?.value ?? null,
            beanElevation: document.querySelector('#bean-elevation')?.value ?? null,
        },
        waterComposition: {
            ph: document.querySelector('#ph')?.value ?? null,
            tds: document.querySelector('#tds')?.value ?? null,
            gh: document.querySelector('input[name="gh"]:checked')?.value ?? null,
            kh: document.querySelector('input[name="kh"]:checked')?.value ?? null,
        },
        brewPreferences: {
            acidity: document.querySelector('#acidity')?.value ?? null,
            sweetness: document.querySelector('#sweetness')?.value ?? null,
            body: document.querySelector('#body')?.value ?? null,
            clarityBalance: document.querySelector('#clarity-balance')?.value ?? null,
        }
    }
}