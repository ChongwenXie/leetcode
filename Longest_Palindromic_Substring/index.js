/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var midIndex;
    if (s.length % 2 == 0){
        midIndex = s.length / 2 - 1;
    }
    else
    {
        midIndex = (s.length - 1) / 2;
    }
    var longestCount = 0;
    var longestStartIndex = -1;
    var longestEndIndex = -1;
    var computeCount = 0;

    // from middle to begin
    for (var i = midIndex ; i >= 0; i--) {
        if (2*i+1 < longestCount) {
            break;
        }
        var localLongestCount = 1;
        for (var j = 1; (i - j) >= 0 && (i + j) < s.length; j++) {
            computeCount++;
            if (s[i-j] == s[i+j]) {
                localLongestCount += 2;
            }
            else {
                break;
            }
        }
        j--;
        if (localLongestCount > longestCount) {
            computeCount++;
            longestCount = localLongestCount;
            longestStartIndex = i - j;
            longestEndIndex = i + j;
            console.log(1, localLongestCount, longestStartIndex, longestEndIndex);
        }

        localLongestCount = 0;
        for (var j = i, k = i+1; j >= 0 && k < s.length; j--, k++) {
            computeCount++;
            if (s[j] == s[k]) {
                localLongestCount += 2;
            }
            else {
                break;
            }
        }
        j++;
        k--;
        if (localLongestCount > longestCount) {
            computeCount++;
            longestCount = localLongestCount;
            longestStartIndex = j;
            longestEndIndex = k;
            console.log(2, localLongestCount, longestStartIndex, longestEndIndex);
        }
    }

    // from middle to end
    for (var i = 1 + midIndex ; i < s.length; i++) {
        if (2*(s.length-i-1)+1 < longestCount) {
            break;
        }
        var localLongestCount = 1;
        for (var j = 1; (i - j) >= 0 && (i + j) < s.length; j++) {
            computeCount++;
            if (s[i-j] == s[i+j]) {
                localLongestCount += 2;
            }
            else {
                break;
            }
        }
        j--;
        if (localLongestCount > longestCount) {
            computeCount++;
            longestCount = localLongestCount;
            longestStartIndex = i - j;
            longestEndIndex = i + j;
            console.log(3, localLongestCount, longestStartIndex, longestEndIndex);
        }

        localLongestCount = 0;
        for (var j = i, k = i+1; j >= 0 && k < s.length; j--, k++) {
            computeCount++;
            if (s[j] == s[k]) {
                localLongestCount += 2;
            }
            else {
                break;
            }
        }
        j++;
        k--;
        if (localLongestCount > longestCount) {
            computeCount++;
            longestCount = localLongestCount;
            longestStartIndex = j;
            longestEndIndex = k;
            console.log(4, localLongestCount, longestStartIndex, longestEndIndex);
        }
    }
    console.log(computeCount);
    console.log(longestCount);
    console.log(longestStartIndex);
    return s.substr(longestStartIndex, longestCount);
};

console.log(longestPalindrome("ccd"));