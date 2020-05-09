function foo(a, b, c)
{
  if (arguments.length == 2) {
    console.log("foo 1");
  } else if (arguments.length == 3) {
    console.log("foo 2");
  }
}

foo(1, 2);
foo(1, 2, 3);