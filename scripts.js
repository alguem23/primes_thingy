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

function decomp() {
    var input = ~~(document.getElementById('input').value)

    var decomped = decompose(input)

    var foo = ''

    for (let i = 0; i < decomped[0].length; i++) {
        var factor = decomped[0][i]
        var prime  = decomped[1][i]

        if (prime == undefined) prime = ''

        foo += `<tr class="result">   
        <td class="result"> ${factor} </td>
        <td class="result"> ${prime} </td>
        </tr>`
    }

    document.getElementById('decomps').innerHTML += `<table class="result">${foo}</table>`
}

