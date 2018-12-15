function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
    bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);

//bucket should be ['l', 'o', 'l']
Test.assertSimilar(bucket, ['l', 'o', 'l']); 

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket); //bucket should be ['l']

Test.assertSimilar(bucket, ['l']); 