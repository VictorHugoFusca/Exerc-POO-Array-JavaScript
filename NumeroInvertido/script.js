document.getElementById("numberForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const number = document.getElementById("numberInput").value;
    const reversedNumber = reverseNumber(number);

    document.getElementById("result").textContent = `Número invertido: ${reversedNumber}`;
});

function reverseNumber(number) {
    const reversed = parseFloat(number.toString().split('').reverse().join(''));
    return reversed;
}
