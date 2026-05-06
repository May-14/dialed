let brewBtn = document.querySelector("#brew-btn")

brewBtn.addEventListener("click", () => {
    const formData = collectFormData()
    localStorage.setItem("dialedData", JSON.stringify(formData))
    window.location = "brew.html"
})

function collectFormData() {
    return {
        method: document.querySelector('input[name="method"]:checked')?.value ?? null,
        origin: document.querySelector('input[name="origin"]:checked')?.value ?? null,
        varietal: document.querySelector('input[name="varietal"]:checked')?.value ?? null,
        process: document.querySelector('input[name="process"]:checked')?.value ?? null,
        roastInput: document.querySelector('input[name="roast-input"]:checked')?.value ?? null,
        visualRoast: document.querySelector('input[name="visual-roast-input"]:checked')?.value ?? null,
        agtronValue: document.querySelector('#agtron-value')?.value ?? null,
        gh: document.querySelector('input[name="gh"]:checked')?.value ?? null,
        kh: document.querySelector('input[name="kh"]:checked')?.value ?? null,
        ph: document.querySelector('#ph')?.value ?? null,
        tds: document.querySelector('#tds')?.value ?? null,
        userElevation: document.querySelector('#user-elevation')?.value ?? null,
        beanElevation: document.querySelector('#bean-elevation')?.value ?? null,
        age: document.querySelector('#age')?.value ?? null,
        acidity: document.querySelector('#acidity')?.value ?? null,
        sweetness: document.querySelector('#sweetness')?.value ?? null,
        body: document.querySelector('#body')?.value ?? null,
        clarityBalance: document.querySelector('#clarity-balance')?.value ?? null,
        machineCapabilities: [...document.querySelectorAll('input[name="machine-capabilities"]:checked')]
            .map(el => el.value),
        availableEquipment: [...document.querySelectorAll('input[name="available-equipment"]:checked')]
            .map(el => el.value),
    }
}