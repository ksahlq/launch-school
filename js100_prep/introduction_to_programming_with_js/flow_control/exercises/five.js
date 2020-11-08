return foo() ? 'bar' : qux();

if (foo()) { // Expression above refactored to use if statement 
  return 'bar';
} else {
  return qux();
}