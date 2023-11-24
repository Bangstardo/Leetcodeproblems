// Function to merge two sorted arrays nums1 and nums2
var merge = function(nums1, m, nums2, n) {
    // Continue the loop as long as there are elements in nums2
    while (n) {
        // Compare the last elements of nums1 and nums2
        if (nums1[m - 1] > nums2[n - 1]) {
            // If the last element of nums1 is greater, place it in the merged array
            // and decrement the index in nums1 (m)
            nums1[m + n - 1] = nums1[--m];
        } else {
            // If the last element of nums2 is greater, place it in the merged array
            // and decrement the index in nums2 (n)
            nums1[m + n - 1] = nums2[--n];
        }
    }
    // Return the merged array (modified nums1)
    return nums1;
};