window.addEventListener("load", solve);

function solve() {
    document.querySelectorAll('form')[0].children[8].addEventListener('click', sendForm)

    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let receivedSec = document.getElementById('received-orders');

    function sendForm(e) {
        debugger
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }
        createDOMElements(descriptionValue, clientNameValue, clientPhoneValue);

        descriptionValue = '';
        clientNameValue = '';
        clientPhoneValue = '';
    }
    function createDOMElements(descriptionValue, clientNameValue, clientPhoneValue) {
        let div = createDiv(descriptionValue, clientNameValue, clientPhoneValue);
        receivedSec.appendChild(div)

    }

    function createDiv(descriptionValue, clientNameValue, clientPhoneValue) {
        let div = document.createElement('div');
        div.classList.add('container');

        let productType = document.getElementById('type-product').value;

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';


        let finishBtn = document.createElement('button')
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair'


        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        return div


    }
}