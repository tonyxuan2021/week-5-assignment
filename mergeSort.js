// Problem #1: Merge Sort

const data = {
  results: {
    payload: [
      {
        profile: {
          name: 'Tony',
          rank: 9,
          favorites: [
            {
              title: 'Spider-Man',
              rating: 5,
            },
            {
              title: 'Spongebob',
              rating: 9,
            },
          ],
        },
      },
      {
        profile: {
          name: 'John',
          rank: 2,
          favorites: [
            {
              title: 'Hulk',
              rating: 1,
            },
            {
              title: 'Top Gun',
              rating: 8,
            },
          ],
        },
      },
    ],
  },
};

// 1. Merge sort (ascending order) by the rank
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j].profile.rank > arr1[i].profile.rank) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

mergeSort(data.results.payload);
