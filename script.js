function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter both Height and Weight");
        return;
    }

    let heightInMeter = height / 100;

    let bmi = weight / (heightInMeter * heightInMeter);

    bmi = bmi.toFixed(2);

    document.getElementById("bmi").innerHTML = bmi;

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal Weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    }
    else {
        status = "Obese";
    }

    document.getElementById("status").innerHTML = status;
}