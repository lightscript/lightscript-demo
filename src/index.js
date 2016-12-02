
for let i = 0; i < 10; i++ {
  console.log(i);
}

for i from 0 til 10 {
  console.log(i)
}


for i from 5 + 4 til 20 {
  console.log(i)
}

arr := [3, 4, 5]


for i from arr {
  console.log(i)
}

for i, x from arr {
  console.log(i, x)
}

for let i = 0; i < 10; i++ {
  console.log(i);
}

for x of arr {
  console.log(x);
}

for k in arr {
  console.log(k);
}

obj := { a: 1, b: 2, c: 3 }

for [ k, v ] of Object.entries(obj) {
  console.log(k, v);
}

for { a, b } of [obj, obj] {
  console.log(a, b);
}

if 0 + 1 === 1: console.log(1)
