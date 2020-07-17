// ex.1
let a = 1589
let end = a % 10
alert("last number is " + end)

// ex.2
let whether = -15
if(whether < 0)
{
    alert("yes")
}
else{
    alert("no")
}

// ex.3 dic(degree in celsius)
let dic =  31
let dif = dic * 1.8 + 32
alert('temperature' + dif)

// ex.4
let a = 15
let b = 5
if(a % b == 0)
{
    alert('1')
}
else{
    alert('0')
}

ex.5
let a = 1500
let b = 50
let c = 254

if (a > b && a > c)
{
    alert("max num is" + a)
} 
else if(b > a && b > c)
{
    alert('max num is' + b)
}
else if(c > a && c > b)
{
    alert("max num is" + c)
}