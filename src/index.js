// TODO: create actual test files
function l(...args) {
  console.log(...args)
}

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

l("arrows:")

fn() -> 0
l(fn())

fn1() ->
  1
l(fn1())

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

fn6(a, b, c) ->
  a + b() + c

l(fn6(1, fn7() -> 6, 2))
l(fn6(1, fn7() => 6, 2))

fn8() ->
  let i = 0
  for 0 til 3:
    i++
  i + 2
l(fn8())

fn81() ->
  for i from 0 til 3:
    i
l(fn81())

fn82() ->
  for i from 0 til 3:
    for j from 4 til 5:
      i + j
l(fn82())

fn9() ->
  if true:
    1
  else:
    3

l(fn9())

fn10() ->
  if false:
    1
  else:
    3

l(fn10())

fn10() ->
  if false:
    1
  else if true:
    3
  else:
    4

l(fn10())

fn11(a) =>
  if 1:
    a
  else:
    2

l(fn11(3))

fn12(a) => a

l(fn12(4))

fn13() -*>
  yield 1
  yield 2

for x of fn13():
  l(x)

fn14() -/>
  await Promise.resolve(1)
  x := await Promise.resolve(2)
  l(x)
  return await Promise.resolve(x)

l(fn14())

fn15() =/> 3
l(fn15())

fn16() =/> await Promise.resolve(1)
l(fn16().then(l))

fn17() ->
  2
  x := 7
l(fn17())

fn18 := () -/>
  await 2
  if 3:
    3
  4

fn19 := () =/>
  await 2
  if 3:
    3
  4

a =/> await a
a -/> await a
a -*> yield a
a -*> {
  yield a
}
a -/>
  await a
  await a
a =/>
  await a
  await a
a =/> {
  await a
  await a
}
() =/> {
  await a
  await a
}

obj2 := {
  a: 7
  x() ->
    2
    3
  y() -/>
    await 1
  z() => this.a
}
l(obj2.z())

class A extends Object {
  constructor() ->
    this.foo = "foo"
    this.bar = "bar"
    super()
  a() -> 1
  b() -/> 2
  c() => this.foo
  get d() -> this.foo
  set d(n) -> this.foo = n
  static e() -> 3

  // todo: disallow bound static, bound constructor
  static f() => 4
}

// TODO:
// class B:
//   a() ->
//     1
//     2
//   b() =>
//     3
//     4



/*
  functions
  - both statements and expressions...
    x statements, always named...
      - identifier, parenL, bindingList, parenR, arrow, body
    - expressions, named (as above) or unnamed...
      - unnamed, want same as current arrows, but skinny recorded
  x skinny-arrow definition
  x fat-arrow definition
  x gen,async definition
  - expression
  x indent
  x implicit return

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
