/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var ret = "";
    if (s.length <= 0 || numRows <= 0) {
        return ret;
    }
    var unitSize;
    if (numRows == 1)
        unitSize = 1;
    else
        unitSize = 2*numRows-2;
    var patterCount = (s.length-s.length%unitSize)/unitSize;
    if (s.length%unitSize != 0)
        patterCount++;
    //first row
    for (var i=0; i<patterCount; i++) {
        ret = ret + s[unitSize*i];
    }
    //middle rows
    for (var r=1; r<numRows-1; r++) {
        for (var i=0; i<patterCount; i++) {
            var index = unitSize*i+r;
            if (index < s.length) {
                ret = ret + s[index];
            }
            index = unitSize*(i+1)-r;
            if (index < s.length) {
                ret = ret + s[index];
            }
        }
    }
    //last row
    if (numRows > 1) {
        for (var i=0; i<patterCount; i++) {
            var index = unitSize*i+r;
            if (index < s.length) {
                ret = ret + s[index];
            }
        }
    }
    return ret;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("ABCD", 2));
console.log(convert("A", 1));
console.log(convert("AB", 1));
console.log(convert("A", 2));