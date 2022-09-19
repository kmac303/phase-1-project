# TV Catalog

"TV Catalog" is a clean search application that looks up any TV show by name. This is done by pulling data from the TVmaze Public API (http://api.tvmaze.com/search/shows?q=${query}).

## Installation

Copy the SSH link from GitHub and clone into your terminal to install this.

## Usage

```javascript
searchShow("Saturday")

# returns   'Amazing Saturday'
            'Saturday Superstore'
            'Saturday Supercade'
            '/Saturday Disney'
            'Saturday Sportsday'
            'Saturday Brunch'
            'Saturday Night Live'
            'Saturday Kitchen Live'
            'Saturday Sport'
            'Sam Saturday'
```

## License
[TVMaze](https://www.tvmaze.com/api/) 
"Use of the TVmaze API is licensed by CC BY-SA. This means the data can freely be used for any purpose, as long as TVmaze is properly credited as source and your application complies with the ShareAlike provision. You can satisfy the attribution requirement by linking back to TVmaze from within your application or website, for example using the URLs available in the API."