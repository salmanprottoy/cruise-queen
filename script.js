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
function bookingConfirmation(){
    let flyingFrom = document.getElementById('flying-from').value;
    let flyingTo = document.getElementById('flying-to').value;
    let departureDate = document.getElementById('departure-date').value;
    let returnDate = document.getElementById('return-date').value;
    let totalCost = document.getElementById('total-price').innerText;
    if(flyingFrom == null || flyingFrom == "" 
        && flyingTo == null || flyingTo == "" 
        && departureDate == null || departureDate == "" 
        && returnDate == null || returnDate == "" 
        || totalCost <= 0){
            alert("Please fill up all fields");
    }
    else{
        document.getElementById("ticket-booking").style.display = "none";
        document.getElementById("ticket-confirmation").style.display = "block";
        document.getElementById('confirmed-flying-from').innerText = flyingFrom;
        document.getElementById('confirmed-flying-to').innerText = flyingTo;
        document.getElementById('confirmed-departure').innerText = departureDate;
        document.getElementById('confirmed-return').innerText = returnDate;
        document.getElementById('confirmed-total-cost').innerText ='$' + totalCost;
    }
}