var qtyInputs = document.getElementsByClassName("qty");

    // Attach input event listener to each input
    for (var i = 0; i < qtyInputs.length; i++) {
        qtyInputs[i].addEventListener("input", calculateTotal);
    }

    function calculateTotal() {
        // Get the quantity value
        var quantity = this.value;

        // Get the price value from the data attribute
        var item = this.getAttribute("data-item");
        var price = document.getElementById(item).querySelector("[data-price]").getAttribute("data-price");

        // Calculate the total price for the current item
        var itemTotal = quantity * price;

        // Update the total price in the corresponding row
        document.getElementById(item).querySelector(".total").textContent = "Total: ₹" + itemTotal;

        // Calculate and display the overall total
        var overallTotal = 0;
        for (var i = 0; i < qtyInputs.length; i++) {
            var currentQty = qtyInputs[i].value;
            var currentItem = qtyInputs[i].getAttribute("data-item");
            var currentPrice = document.getElementById(currentItem).querySelector("[data-price]").getAttribute("data-price");
            overallTotal += currentQty * currentPrice;
        }

        // Display the overall total
        document.getElementById("overallTotal").textContent = "Overall Total: ₹" + overallTotal;
    }