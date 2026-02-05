const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();
// Output:
// foo
// undefined
// Explanation:
// this obj.b() refer to obj, so this.a is "foo".
// c() is standalone function call, so this refers to global objject, where a is undefined.
