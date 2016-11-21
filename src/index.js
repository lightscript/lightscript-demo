for i from 0 til 10 {
  console.log(i)
}


for i from 5 til 10 step 2 {
  console.log(i)
}


for i from 5 + 4 til (i === 20) step (i *= 2) {
  console.log(i)
}


arr := [3, 4, 5]


for i from arr {
  console.log(i)
}

for i, x from arr {
  console.log(i, x)
}
