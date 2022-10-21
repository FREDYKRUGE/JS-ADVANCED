class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        vegetables.forEach(product => {
            let [type, quantity, price] = product.split(' ');
            let currentProduct = this.availableProducts.find(pr => pr.type === type);
            if (!currentProduct) {
                this.availableProducts.push({
                    type,
                    quantity: Number(quantity),
                    price: Number(price)
                })
            } else {
                currentProduct.quantity += Number(quantity);
                if (currentProduct.price < Number(price)) {
                    currentProduct.price = Number(price);
                }
            }

        });
        let buff = new Set();
        this.availableProducts.forEach(pr => buff.add(pr.type));
        let arrBuff = Array.from(buff);

        return `Successfully added ${arrBuff.join(', ')}`

    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;
        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(' ');
            let currentProduct = this.availableProducts.find(pr => pr.type === type);
            if (!currentProduct) {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (Number(quantity) > currentProduct.quantity) {
                throw Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += currentProduct.price * Number(quantity);
            currentProduct.quantity -= Number(quantity)
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let currentProduct = this.availableProducts.find(pr => pr.type === type);
        if (!currentProduct) {
            throw Error(`${type} is not available in the store.`)
        }
        if (Number(quantity) > currentProduct.quantity) {
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            currentProduct.quantity -= Number(quantity);
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision() {
        let buff = `Available vegetables:\n`;
        this.availableProducts.sort((a, b) => a.price - b.price)
            .forEach(pr => buff += `${pr.type}-${pr.quantity}-$${pr.price}\n`);
        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return buff;
    }
}