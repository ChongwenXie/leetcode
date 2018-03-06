/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
    var maxCount = 0;
    var computeCount = 0;
    for (var j = 0; j < s.length; j++) {
        if (s.length - j <= maxCount) {
            break;
        }
        var tempMaxCount = 0;
        var charCount = {};
        for (var k = j; k < s.length; k++) {
                computeCount++;
                if (charCount[s[k]] == null) {
                tempMaxCount++;
                charCount[s[k]] = 1;
            }
            else{
                break;
            }
        }
        if (tempMaxCount > maxCount) {
            maxCount = tempMaxCount;
        }
    }
    console.log(computeCount);
    return maxCount;
};

var lengthOfLongestSubstring2 = function(s) {
        var n = s.length;
        var set = {};
        var ans = 0, i = 0, j = 0, computeCount = 0;
        while (i < n && j < n) {
            computeCount++;
            // try to extend the range [i, j]
            if (set[s[j]] == null){
                set[s[j++]] = 1;
                ans = Math.max(ans, j - i);
            }
            else {
                set[s[i++]] == null;
            }
        }
        console.log(computeCount);
        return ans;
    }

var s = "aabcdefghijklmnopqrstuvwxyz";
console.log(s.length);
console.log(lengthOfLongestSubstring1(s));
console.log(lengthOfLongestSubstring2(s));