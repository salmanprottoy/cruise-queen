function getInput(ticket){
    let ticketCount;
    const ticketInput = document.getElementById(ticket + '-count');
    if (ticketInput.value == "") {
        ticketCount = 0;
    } else {
        ticketCount = parseInt(ticketInput.value);
    }
    return ticketCount;
}
function ticketCountChanges(ticket, isIncrease) {

    const ticketCount   = getInput(ticket);
    let newTicketCount  = ticketCount;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = newTicketCount;
    calculateTotalAmount();
}
function calculateTotalAmount() {
    const firstClassCount   = getInput('first-class');
    const economyClassCount = getInput('economy-class');
    const subtotalPrice     = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subtotal-price').innerText = subtotalPrice;
    const taxAmount = Math.round(subtotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = taxAmount;
    const totalPrice = subtotalPrice + taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}