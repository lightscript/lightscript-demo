// TODO: create actual test files

arr := [3, 4, 5]
obj := { a: 1, b: 2, c: 3 }

for let i = 0; i < 10; i++ {
  console.log(i);
}

for i from 0 til 10 {
  console.log(i)
}


for i from 5 + 4 til 20 {
  console.log(i)
}

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

// for [ k, v ] of Object.entries(obj) {
//   console.log(k, v);
// }

for { a, b } of [obj, obj] {
  console.log(a, b);
}

if 0 + 1 is 1: console.log(1)
if 0 + 1 isnt 2: console.log(1)
if 1 and 1: console.log(1)
if 0 or 1: console.log(1)
if not 1 or not 0: console.log(1)
if not (0 or 0): console.log(1)


for i from 0 til 10: console.log(i)
for 0 til 10: console.log(2)
for i from 0 til 10: for j from 5 til 7: console.log(i, j)
for i from 0 til 2: if i === 1: console.log(i)
for i, x from arr: console.log(i, x)

comp1 := [ for i of arr: i ]
console.log(comp1)

comp11 := [ for k in obj: k ]
console.log(comp11)

comp12 := [ for i, x from arr: [i, x] ]
console.log(comp12)

comp2 := [ for let i = 0; i < 10; i++: i * 10 ]
console.log(comp2)

comp3 := [ for i from 0 til 10: if i > 5: i ]
console.log(comp3)

comp4 := [ for 0 til 10: for j from 5 til 7: j ]
console.log(comp4)

comp5 := [ for i from 0 til 3: for j from 5 til 7: ({ i, j }) ]
console.log(comp5)

comp6 := [ for 0 til 4: [ for 0 til 3: 2 ] ]
console.log(comp6)

function fn1(n) {
  for i from 0 til n: if i > 10: return true
  return false
}
console.log(fn1(13))

function b(...args) {
  console.log(...args)
  return args
}
obj~b(5);
obj~console.log(5);
obj.a~b(5, 5)
obj.a~b(5, 5)~b().toString()~b()

5~Math.pow(3)

console.log(arr.0)
console.log(arr.1)
arr.50 = 8
console.log(arr.50)
console.log(obj.a.toString().0.0)


for i from 0 til 4:
  if i > 2:
    for j from 5 til 7:
      console.log(j)
    break

fn() -> 1
fn2() -> {
  return 2
}
fn3() ->
  3
  return 3

fn4(x) ->
  return x + 4

fn5(x) ->
  x
  x + 4

// fn5(fn6() -> blah)


/*
  functions
  - both statements and expressions...
    - statements, always named...
      - identifier, parenL, bindingList, parenR, arrow, body
    - expressions, named (as above) or unnamed...
      - unnamed, want same as current arrows, but skinny recorded
  - single-arrow definition
  - double-arrow definition
  - gen,async definition
  - expression
  - indent
  - implicit return

  bound
  - class
  - method
  - disallow static

  going to need to add `arrowType` to ArrowExpression node
  and then in babel, rewrite skinny ones into FunctionExpressions, etc.
  named arrows should be parsed into FunctionDeclarations,
  and then some rewritten into ArrowExpressions in babel...
  hmmm...
  or maybe create a new ArrowDeclaration instead... yeah, that sounds better...

  okay, where to start...
  probably ArrowDeclaration
 */
