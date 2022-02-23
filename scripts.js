/* prompt */
var hotdogs = window.prompt("How many hotdogs?", "0");
if (hotdogs != null) {
    document.getElementById("#hotdogs").innerHTML = hotdogs;
}

var fries = window.prompt("How many orders of fries?", "0");
if (fries != null) {
    document.getElementById("#fries").innerHTML = fries;
}

var drinks = window.prompt("How many drinks?", "0");
if (drinks != null) {
    document.getElementById("#drinks").innerHTML = drinks;
}

function subtotal(hotdogs, fries, drinks) {
    var orderSubtotal = (3.75 * hotdogs) + (2.00 * fries) + (1.80 * drinks);
    return orderSubtotal;
}

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  
var total = subtotal(hotdogs, fries, drinks);
var non_curr_total = total;
total = formatter.format(total);

if (total != null) {
    document.getElementById("subtotal").innerHTML = total;
}

function discountAmount(Subtotal) {
    if (Subtotal > 20) {
        var total_discount = (Subtotal * 0.1);
        return total_discount;
    }
}

function discountSubtotal(subtotal) {
    if (subtotal > 20) {
        newTotal = (subtotal * 0.9);
        return newTotal;
    }
    else {
        return subtotal;
    }
}

/* calculate the discount */
var discountAmt = discountAmount(non_curr_total);
discountAmt = formatter.format(discountAmt);
if (discountAmt != null) {
    document.getElementById("discountAmount").innerHTML = discountAmt;
}


/* calculate the discounted subtotal */
var discountTotal = discountSubtotal(non_curr_total);
var discountAmt_not_curr = discountTotal;

/* to store not in currency format for later calcs */
// var non_curr_discount = discountTotal;
discountTotal = formatter.format(discountTotal);

if (discountTotal != null) {
    document.getElementById("discountTotal").innerHTML = discountTotal;
}

/* calculate the tax subtotal */
function taxSubtotal(discounted_total) {
    var taxTotal = (discounted_total * 1.065);
    return taxTotal;
}

var taxedSubtotal = taxSubtotal(discountAmt_not_curr);
taxedSubtotal = formatter.format(taxedSubtotal);
if (taxedSubtotal != null) {
    document.getElementById("taxTotal").innerHTML = taxedSubtotal;
}