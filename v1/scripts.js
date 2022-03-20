function ye1() {
    var a = document.getElementById('template')
    a.innerHTML = '<div>God, if this works :)<div>'
    document.getElementById("decomp_table").innerHTML += a.innerHTML
}

function isPrime(num) {
    if (! num > 1) return false;

    var max = Math.floor(Math.sqrt(num))

    for (let i in 2..max)
        if (num % i == 0)
            return false;
    
    return true;
}

function higherPrime(num) {
    for (num++; true; num++)
        if (isPrime(num)) return num;
}

function decompose(num) {
    var factor = num
    var factors = [num]
    var prime = 2
    var primes = []

    while (factor != 1) {
        if (factor % prime != 0) {
            prime = higherPrime(prime)
            continue
        }

        primes.push(prime)
        factor = Math.floor(factor / prime)
        factors.push(factor)
    }

    return [factors, primes]
}

function decomp_old() {
    var input = ~~(document.getElementById('input').value)

    console.log(`Val: ${input}; Type: ${typeof input}; Val + 1: ${input+1}`)

    var decomped = decompose(input)

    console.log(decomped)

    for (let i = 0; i < decomped[0].length; i++)
        console.log(`${decomped[0][i]}        ${decomped[1][i]}`)

    document.getElementById("decomp_table").innerHTML += input
}

function decomp() {
    var input = ~~(document.getElementById('input').value)

    var decomped = decompose(input)

    for (let i = 0; i < decomped[0].length; i++) {
        var factor = decomped[0][i]
        var prime  = decomped[1][i]

        if (prime == undefined) prime = ''

        var row = `<tr>   <td> ${factor} </td>  <td> ${prime} </td>   </tr>`

        document.getElementById('decompTable').innerHTML += row
    }
}