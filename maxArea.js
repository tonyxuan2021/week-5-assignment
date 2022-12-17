// Problem #3: two pointers

const maxArea = (height) => {
  let result = 0;

  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    result = Math.max(result, area);

    if (height[l] < height[r]) {
      l++;
    } else if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return result;
};
