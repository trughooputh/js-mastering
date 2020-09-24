const posts = [
  { title: 'Post one', body :'The post one' },
  { title: 'Post two', body :'The post two' }
];

console.log(posts);

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${index} - ${post.body}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000);
}

createPost({ name: 'Post three', body: 'The post three' }, getPosts);
getPosts();