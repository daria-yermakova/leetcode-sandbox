//5 Merge Sorted Array
function merge (nums1, m, nums2, n) {
    let curM = m;
    for(let i=0; i<n; i++){
        if(m === 0) {
            if (nums2[i])
                nums1[i + m] = nums2[i];
        } else {
            if(nums2[i] > nums1[0] && nums2[i] <= nums1[curM-1]) {
                let counterBigger = 0;
                let counterLower = 0;
                let startIndex = 0;
                for(let j=1; j<curM-1; ++j) {
                    if(nums2[i] <= nums1[j]) {
                        counterLower++;
                    } else {
                        counterBigger++;
                        startIndex = j;
                    }
                }
                if(counterBigger === (curM-2)) {
                    nums1.splice(curM-1, 0, nums2[i]);
                    nums1.pop();
                } else if(counterLower === (curM-2)) {
                    nums1.splice(1, 0, nums2[i]);
                    nums1.pop();
                } else {
                    nums1.splice(startIndex+1, 0, nums2[i]);
                    nums1.pop();
                }
                curM++;
            } else if(nums1[0] >= nums2[i]) {
                nums1.unshift(nums2[i]);
                nums1.pop();
                curM++;
            }
            else nums1[i+m] = nums2[i];
        }
    }
}