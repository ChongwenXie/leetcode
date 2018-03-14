/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = -1;
    var i = 0;
    var j = height.length - 1;
    while (i < j) {
        var min;
        if (height[i] <= height[j])
            min = height[i];
        else
            min = height[j];
        if ((j-i)*min > max) {
            max = (j-i)*min;
        }
        if (height[i] < height[j])
            i++;
        else
            j--;        
    }
    return max;
};