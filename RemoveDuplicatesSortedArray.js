// This function will eliminate the repeated elements in an array

var removeDuplicates = function(nums) {
    
    // Getting the length of the array dog 

    let numsLength = nums.length;

    // Iterating through the array 

    for (let i = 0; i < numsLength; i++) {

        // Check if the current index is in the array's bounds 

        if (i >= nums.length) {

            // If not exit the loop 

            break;
        }

        // Check if the next element is equal to the next 

        if (nums[i] === nums[i + 1]) {

            // If yes remove the current element from the array 
            
            nums.splice(i, 1);

            // Decrement the index to recheck current position

            i--;    
        }
    }
};
