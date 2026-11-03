// 3. NUMERIC SEPARATORS (ES2021+)
let million =1_000_000;//
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

// 4. BIGINT - For arbitrarily large integers
let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("Bigint literal:", big);
console.log("Bigint from String:", big2);
console.log("Bingint from Number:", bigFromNum);
console.log("Type of big:", typeof big);
