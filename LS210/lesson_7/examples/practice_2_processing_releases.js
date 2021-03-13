// Processing releases

// Input: an array of hashes
// Output: Keep only releases that have both id and title data present.
// Keep only the id and title data for each release.

// 1. First filter for releases with only id and title



function processReleaseData(newReleases) {
  var filteredReleases = newReleases.filter(function(release) {
    return release.id && release.title;
  });
  var newReleaseArr = [];
  filteredReleases.forEach(function(release) {
    newReleaseArr.push({id: release.id, title: release.title});
  });
  return newReleaseArr;
}

// Another approach, to make it also work with an ID of 0
function processReleaseData(data) {
  return data.filter(function (release){ // return the filtered data immediately
    return checkID(release.id) && release.title;
  }).map(function (release) { // take the return value of the filtered data and immediately map it to an output
    return {
      id: release.id,
      title: release.title,
    };
  });
}

function checkID(id) {
  if (id >= 0) {
    return true;
  } else {
    return false;
  }
}

var newReleases = [
  {
    'id': 0,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases)); // [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];