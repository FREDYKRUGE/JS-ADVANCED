async function getInfo() {
    const stopInfoElement = document.getElementById('stopId')
    const stopId = stopInfoElement.value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    const stopNameElement = document.getElementById('stopName')
    const busList = document.getElementById('buses')

    busList.innerHTML = '';
    stopInfoElement.value = '';

    try {
        const response = await fetch(url);
        const data = await response.json();
        stopNameElement.textContent = data.name
        debugger
        Object.entries(data.buses).forEach(([busName, time]) => {
            let li = document.createElement('li')
            li.textContent = `Bus ${busName} arrives in ${time} minutes`
            busList.appendChild(li)
        })
    } catch (e){
        stopNameElement.textContent = 'Error'
    }
}