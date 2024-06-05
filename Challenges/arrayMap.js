/*
Given an array of integers and a target sum, determine if there exists a contiguous
subarray within the array that sums up to the target. Return true if such a subarray exists,
otherwise return false.
Example:
Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
*/

function iscontiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        // check if the currentSum matches the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Test with given arrays
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target));  // result: true
