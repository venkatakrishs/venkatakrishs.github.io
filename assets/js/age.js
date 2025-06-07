function getCurrentAge(dobString) {
    const today = new Date();
    const dob = new Date(dobString);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function getYear() {
    const today = new Date();
    let year = today.getFullYear();

    return year;
}

// Set age after the DOM is loaded
window.onload = function () {
    const age = getCurrentAge("1998-02-06");
    document.getElementById("ageValue").innerText = age;
    const year = getYear();
    document.getElementById("copyright-year").innerText = year;
};