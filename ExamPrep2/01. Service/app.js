window.addEventListener("load", solve);

function solve() {
    
    document.querySelectorAll('button')[0].addEventListener('click', sendForm)
    document.querySelectorAll('button')[1].addEventListener('click', clearCompletedOrders)

    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let receivedSec = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    function sendForm(e) {
    
        
    
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }
        createDOMElements(descriptionValue, clientNameValue, clientPhoneValue);

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
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

        //Start Button
        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        startBtn.addEventListener('click', startRepair)


        //Finish Button
        let finishBtn = document.createElement('button')
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair'
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', completeOrder)


        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        return div


    }
    function startRepair(e) {
      
        startBtn = Array.from(document.querySelectorAll('button'))[1];
        finishBtn = Array.from(document.querySelectorAll('button'))[2];
        startBtn.disabled = true;
        finishBtn.disabled = false;
        
    } 
    function completeOrder(e) {
        
        let currentPost = e.target.parentElement;
        completedOrders.appendChild(currentPost)

        Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove())
    }
    function clearCompletedOrders(e) {
       

        let comp = Array.from(completedOrders.children);

        for (let i = 0; i < comp.length; i++){
            if (i > 2) {
                Array.from(completedOrders.children)[i].remove();
            } 
        }
       
        
    }
    
}