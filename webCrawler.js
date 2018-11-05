// Step 1. initialize empty arrays
let visit = []
let skip = []
let invalid = []

// Step 2. + 3. generate array of all addresses and array of all links
let pageAddresses = []
let pageLinks = []
const getUrls = function(array) {
  // first time, get addresses
  pageAddresses.push(array.address)
  // then get links
  pageLinks.push(array.links)
}
let links = internetOne.pages.forEach(getUrls)
console.log('address', pageAddresses)
console.log('links', pageLinks)

const webCrawl = function(links, pageAddresses, pageLinks) {
  // Step 4. loop through links array, push into visit or invalid
  for (let i=0; i<pageLinks.length; i++) {
    if (pageAddresses.includes(pageLinks[i])) {
      visit.push(pageLinks[i])
    } else {
      invalid.push(pageLinks[i])
    }
  }

  // Step 5. go through visit arr and move any duplicates into skip
  for (let i=0; i<visit.length; i++) {
    // use indexOf to remove duplicates
    if (indexOf(visit[i]) !=== -1) {
      skip.push(visit[i])
    }
  }

  // // Step 6. return arrays
  return visit
  return skip
  return invalid
}


// test internet data
let internetOne = {
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
    },
    {
      "address":"http://foo.bar.com/p5",
      "links": []
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
    }
  ]
}

let internetTwo = {
  "pages": [
      {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p3"]
    },
    {
      "address":"http://foo.bar.com/p3",
      "links": ["http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5"]
    },
    {
      "address":"http://foo.bar.com/p5",
      "links": ["http://foo.bar.com/p1"]
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p1"]
    }
  ]
}
