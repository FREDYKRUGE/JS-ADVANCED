function solve() {
    const infoDisplay = document.getElementById('info')
    const url = 'http://localhost:3030/jsonstore/bus/schedule/'
    let busStationName = '';
    let nextId = 'depot';
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    async function depart() {
        try{departBtn.disabled = true;
        const response = await fetch(url + `${nextId}`);
        const data = await response.json();

        busStationName = data.name;
        nextId = data.next;
        infoDisplay.textContent = `Next stop ${busStationName}`
            arriveBtn.disabled = false;
        }
        catch (e) {
            infoDisplay.textContent = "Error";
        }
        

        
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoDisplay.textContent = `Arriving at ${busStationName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();