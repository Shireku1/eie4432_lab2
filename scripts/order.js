const drinks_info = {
    "Bubble_Milktea": {
        "Small": 15,
        "Medium": 20,
        "Large": 25,
    },
    "Iced_Latte": {
        "Small": 17,
        "Medium": 22,
        "Large": 27,
    },
    "Single": {
        "Small": 214,
        "Medium": 314,
        "Large": 520,
    }

}


const calculatePrice = () => {
    // console.log("calculatePrice() called");

    var price = 0;
    const drink_selected = document.getElementById("drink").value;
    var size_selected;
    for (var radio of document.getElementsByName("size")) {
        if (radio.checked) {
            if (drink_selected === "") {
                alert("Please select the drink first.")
                radio.checked = false;
            } else {
                size_selected = radio.value
            }
        };
    }

    if (size_selected) {
        price = drinks_info[drink_selected][size_selected];
    }
    document.getElementById("price").innerText = "Price: $" + price;

    // console.log(drink_selected);
    // console.log(size_selected);
    // console.log(price);

}

const validateForm = (name_input, drink_selected, size_selected, ice_selected, sweetness_selected) => {

    //validate
    if ((!name_input || !drink_selected || !size_selected || !ice_selected || !sweetness_selected)) {
        if (!name_input) alert("Please enter your name.")
        if (!drink_selected) alert("Please select your drink.")
        if (!size_selected) alert("Please select size for your drink.")
        if (!ice_selected) alert("Please select ice for your drink.")
        if (!sweetness_selected) alert("Please select sweetness for your drink.")
        return false;
    }
    return true;
}

const placeOrder = (event) => {
    event.preventDefault();
    //capture value
    const name_input = document.getElementById("name").value.trim();
    const drink_selected = document.getElementById("drink").value;
    var size_selected;
    for (var radio of document.getElementsByName("size")) {
        if (radio.checked) {
            size_selected = radio.value
        };
    }
    var ice_selected;
    for (var radio of document.getElementsByName("ice")) {
        if (radio.checked) {
            ice_selected = radio.value
        };
    }
    var sweetness_selected;
    for (var radio of document.getElementsByName("sweetness")) {
        if (radio.checked) {
            sweetness_selected = radio.value
        };
    }

    if (!validateForm(name_input, drink_selected, size_selected, ice_selected, sweetness_selected)) {
        return
    }

    const orderData = {
        "name": name_input,
        "drink": drink_selected,
        "size": size_selected,
        "ice": ice_selected,
        "sweetness": sweetness_selected
    }
    localStorage.setItem("orders", JSON.stringify(orderData));
    alert("Order placed successfully! Thank you for your order.");
    resetForm();
}

const resetForm = () => {
    document.getElementById("order_form").reset();
    document.getElementById("price").innerText = "Price: $0";
}