// Thought process:
// In order to be a valid link, the address must exist
// first, get an array of all of the valid addresses
// then, go through the links and sort them if they are valid or not
// if valid, push into the visited array
// go back and remove duplicates

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

let list = []
const mapPages = function(array) {
  // first time, get addresses
  list.push(array.address)
  // then get links
  list.push(array.links)
}
let links = internetOne.pages.forEach(mapPages)
// create an array of all the URLs
// console.log(internetOne.pages[0].address)
console.log(list)

// create three arrays - success, duplicate, invalid
let success = []
let duplicate = []
let invalid = []


// ### Expected output:
//
// ```
// Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p4", "http://foo.bar.com/p5", "http://foo.bar.com/p6"]
//
// Skipped: ["http://foo.bar.com/p2", "http://foo.bar.com/p4","http://foo.bar.com/p1", "http://foo.bar.com/p5"]
//
// Error: ["http://foo.bar.com/p3", "http://foo.bar.com/p7"]
// ```
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
