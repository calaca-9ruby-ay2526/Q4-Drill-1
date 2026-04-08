function checkElec() {
    
    let consumption = document.getElementById('consumption').value;

    if (Number(consumption) >= 0 && Number(consumption) <=100) {
        window.alert ("Discounted Electricity rates");
    }
    else if (Number(consumption) >= 101 && Number(consumption) <=200) {
        window.alert ("Normal Residential rates");
    }
    else if (Number(consumption) >= 201 && Number(consumption) <=300) {
        window.alert ("Typical electricity usage");
    }
    else if (Number(consumption) >= 301 && Number(consumption) <=400) {
        window.alert ("High electricity usage");
    }
    else if (Number(consumption) >= 401 && Number(consumption) <=500) {
        window.alert ("Heavy electricity user");
    }
}