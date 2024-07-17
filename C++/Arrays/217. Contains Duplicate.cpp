class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        //sort the vector takes logn time complexity
      sort(nums.begin(),nums.end());
// looping through the vector taking O(n) complexity
      for(int i=0;i<nums.size()-1;i++){
        if(nums[i]==nums[i+1]){
            return true;
        }
      }
      // Overall complexity - O(n)* O(logn) = O(nlogn)
      // space complexity is O(1) as no extra space is required
return false;
    }
};
