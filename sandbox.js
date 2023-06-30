// // function majority(nums) {
// //     let j = 0
// //     let i = 0
// //     // let spare = []
// //     for(let i = 0; i < nums.sort().length; i ++ ) {
// //         if(nums[i] > nums[i-1]){
// //             // j = nums.slice(i, nums.length)
// //             nums = nums.slice(0, i)
// //             i++
// //         }
// //         // console.log(j, 'j')
// //         console.log(i)
// //         return i = i + j
// //         // console.log(nums, 'nums')
// //     }
// //     console.log(i)
// //     if(nums.length > i) {
// //         // console.log(nums[0], 'nums')
// //         // console.log(j)
// //         return nums[0]
// //     } else {
// //         return i
// //     }
// // }

// // console.log(majority([10,2,10,2,10,2,10,10,10,10,10,2,2,2,2,2,2,2,2,2,2]))

// function buySell(prices) {
//     let mid = prices.indexOf(Math.min.apply(Math,prices))
//     // console.log(mid)
//     // console.log(Math.min.apply(Math, prices))
//     let diff = (Math.max.apply(Math, prices))
//     let res
//     for(let i =0; i < prices.length; i++){
//         if(mid < (prices.length - 1)) {
//           res = diff - mid 
//         }
//         console.log(mid)
//     } 
//     return res
// }

// console.log(buySell([7,1,5,3,9,3]))
// function filterWords(words, letters ) {
//     let sorted =[] 
//     // let wordSplit = words.split('')
//     let letterSplit = letters.split('')
//     let j = 0
//     for(let i = 0; i < words.length; i++) {
//         // console.log(words[i].includes('e'))
//         console.log(letterSplit)
//         if (words[i].includes(letterSplit[j])) {
//             sorted.push(words[i])
//             j ++
//         } else {
//             j ++
//         }
//     }
//     // console.log(letters.split(''))
//     // console.log(words)
//     return sorted
// }

// let word = ['the', 'word', 'dog', 'got', 'a', 'bone']

// filterWords(word, 'ae')

console.log('c' == 'a')