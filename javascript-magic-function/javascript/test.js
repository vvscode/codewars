Test.expect(0 == MagicFunction());
Test.expect(3 == MagicFunction(1, 2));
Test.expect(6 == MagicFunction(1, 3)(2));
Test.expect(6 == MagicFunction(1)(2, 3));
Test.expect(6 == MagicFunction(1)(2)(3));
Test.expect(38 == MagicFunction(1, 2)(3, 4, 5)(6)(7, 10));
