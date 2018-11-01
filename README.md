# web_crawler_challenge

## Project: Web Crawler
For the purposes of this project, we define the Internet as the test data in this document, and a web crawler as software that requests pages from the Internet, parses the content to extract all the links in the page, and visits the links to crawl those pages, to an infinite depth.
### Project Guidelines:
1. We do not expect candidates to spend more than 4 hours on this project.
2. Use any language you want.
3. Use any frameworks you want.
4. If you have to make a tradeoff between clean, maintainable code and a complete solution in the time you’re able to spend, we would rather see clean code.
5. You may include a written statement containing:
    1. Any assumptions you made
    2. Reasons for any significant design choices you made
6. Your solution should:
    1. Start with the first page in the list of pages and follow links to crawl the remaining pages in the list.
    2. Visit each valid page in a JSON “Internet” exactly once. For example, if more than one page has a link to p2, you should only have to parse p2 one time.
    3. Handle all the JSON “Internet” samples in the test data section.
    4. Employ parallelism/concurrency if your language has those capabilities.
    5. Return (order not important):
        * The list of page addresses it crawled successfully
        * The list of duplicate page addresses it skipped
        * The list of invalid page addresses it skipped
