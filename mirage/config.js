var posts = {
    data: [{
        type: 'posts',
        id: 1,
        attributes: {
            title: 'Post',
            post: 'In computing, POST is one of many request methods supported by the HTTP protocol used by the World Wide Web. By design, the POST request method requests that a web server accepts and stores the data enclosed in the body of the request message. It is often used when uploading a file or submitting a completed web form. In contrast, the HTTP GET request method is designed to retrieve information from the server. As part of a GET request, some data can be passed within the URLs query string, specifying for example search terms, date ranges, or other information that defines the query. As part of a POST request, an arbitrary amount of data of any type can be sent to the server in the body of the request message. A header field in the POST request usually indicates the message bodys Internet media type.',
        }
    }, {
        type: 'posts',
        id: 2,
        attributes: {
            title: 'GET',
            post: 'The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect. (This is also true of some other HTTP methods.)[1] The W3C has published guidance principles on this distinction, saying, "Web application design should be informed by the above principles, but also by the relevant limitations."[13] See safe methods below.'
        }
    }, {
        type: 'posts',
        id: 3,
        attributes: {
            title: 'PUT',
            post: 'The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI.[15]'
        }
    }]
};
export default function() {
    this.get('/posts', function(db) {
      // return db.posts;
        return posts;
    });

    this.delete('/posts/:id', function(db, requests) {
        for(post in posts.data){
          console.log(post);
        }
        return posts;
    });
    this.get('/posts/:id', function(db, requests) {
      console.log(requests.params.id);
        posts.data.forEach(function(value){
          if(value.id == requests.params.id){
            console.log(value);
            return value;
          }
        })
    });
}
