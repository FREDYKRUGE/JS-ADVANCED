class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw Error("Not enough space in the garden.")
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`

    }
    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName)
        if (!currentPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (currentPlant.ripe) {
            throw Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw Error(`"The quantity cannot be zero or negative."`)
        }
        currentPlant.ripe = true
        currentPlant.quantity += quantity
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`

        }
    }
    harvestPlant(plantName) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName)
        if (!currentPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (!currentPlant.ripe) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants = this.plants.filter(plant => plant.plantName !== plantName);
        this.storage.push({
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity
        })
        this.spaceAvailable += currentPlant.spaceRequired
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let res = `The garden has ${this.spaceAvailable} free space left.\n`
        let helpArray = []
        this.plants.sort((a, b) => (a.plantName > b.plantName) ? 1 : ((b.plantName > a.plantName) ? -1 : 0))
        for (let plant of this.plants) {
            helpArray.push(plant.plantName)
        }
        res += `Plants in the garden: ${helpArray.join(', ')}\n`
        if (!this.storage.length) {
            res += "Plants in storage: The storage is empty."
        } else {
            res += `Plants in storage: `;
            this.storage.forEach(plant => res += `${plant.plantName} (${plant.quantity}), `)
        }
        res = res.substring(0, res.length - 2)

        return res


    }
}