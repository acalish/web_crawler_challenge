# web_crawler_challenge

### Web Crawler Description:
The purpose of this exercise is to design a web crawler that is given an "internet page" that has
addresses and links on it, and it will go through the “internet page” and visit the websites in order. The web crawler should visit the addresses in order, skip any duplicate ones, and also
skip any pages that do not exist.

### Thought Process:
I first looked over the “internet pages” many times until I saw the pattern of how to tell if a URL is valid or not.  All of the addresses are valid, and then links are only valid if there is an address for them.  Once I realized this, I outlined the order of what I wanted my web crawler to accomplish.

1. Initialize three empty arrays: visit, skip, invalid
2. Generate an array of all of the addresses
3. Generate an array of all the links
4. Loop through the links array.  If the link is in the address array, then it gets pushed into the visit array, if not, it gets pushed into the invalid array.
5. Go through the visit array and move any duplicates to the skip array
6. Return the visit, skip, invalid arrays
