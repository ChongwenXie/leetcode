/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = -1;
    var len = height.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i+1; j < len; j++) {
            var min;
            if (height[i] <= height[j])
                min = height[i];
            else
                min = height[j];
            if ((j-i)*min > max) {
                max = (j-i)*min;
            }
        }
    }
    return max;
};