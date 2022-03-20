function ye1() {
    var a = document.getElementById('template')
    a.innerHTML = '<div>God, if this works :)<div>'
    document.getElementById("decomp_table").innerHTML += a.innerHTML
}

function isPrime(num) {
    if (! num > 1) return false;

    for (let i in 0..Math.floor(Math.sqrt(num)))
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
    var a = ~~(document.getElementById('input').value)

    console.log(`Val: ${a}; Type: ${typeof a}; Val + 1: ${a+1}`)

    console.log(decompose(a))

    document.getElementById("decomp_table").innerHTML += a
}