// Define function that takes nums and val as arguments

var removeElement = function (nums, val) {

    // init a variable g to keep track of the new length of the modified array 

    let g = 0;

    // Iterate through each element of the array nums

    for (let i = 0; i < nums.length; i++) {

        // check if current element is not equal to the specified val 

        if (nums[i] !==val) {

            // If element is not equal to val update the array in place
            // Set value at index g to the current element and ++ it boi  

            nums[g++] = nums[i];
        }
    }

    // just for commenting syntax sake, returns 

    return g;
    
};