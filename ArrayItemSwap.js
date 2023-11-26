// Breaking the convention of the Readme file this is not a problem that was submited to leetcode
// This is rather a must know sorting bubble algorithm
// Got these ones from ThePrimeagen thanks to him 

export default function bubble_sort(arr: number[]): void {

    // for loop that iterates through elements of a list

    for (let i = 0; i < arr.length; i++) {

        //  

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        } 
    }
}