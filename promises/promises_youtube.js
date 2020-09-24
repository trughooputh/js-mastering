const posts = [
  { title: 'Post one', body :'The post one' },
  { title: 'Post two', body :'The post two' }
];

console.log(posts);

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${index}: ${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false;
      if (!error) {
        resolve();
      }
      reject('Error: Something went wrong!')

    }, 2000);
  });
}

// Call a function returning a promise
// createPost({ title: 'Post three', body: 'The post three' })
//   .then(getPosts)
//   .catch(e => { console.log(e); })

// Promise all, waiting that all promises defined are done. 
// Assuming they won't have to wait to each other to be resolved
const promise1 = Promise.resolve('Hello world');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});
const promise3 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const promise4 = createPost({ title: 'Post four', body: 'The post four' });

Promise.all([
  promise1,
  promise2,
  promise3,
  promise4
]).then((values) => {
  getPosts();
  console.log(values);
})