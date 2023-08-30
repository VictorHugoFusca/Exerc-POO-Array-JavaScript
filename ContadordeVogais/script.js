document.getElementById("vogalCountForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const inputString = document.getElementById("inputString").value;

    const vogalCount = countVogais(inputString);
    document.getElementById("result").textContent = `Número de vogais: ${vogalCount}`;
});

function countVogais(str) {
    const vogais = "AEIOUaeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++;
        }
    }
    return count;
}