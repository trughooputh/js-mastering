console.log('async/await');

const posts = [
  { title: 'Post one', body :'The post one' },
  { title: 'Post two', body :'The post two' }
];

console.log(posts);

function showPosts() {
  console.log('showPosts()');
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${index} - ${post.body}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  console.log('createPost()');
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

async function init() {
  console.log('init()');
  await createPost({ name: 'Post three', body: 'The post three' });
  showPosts();
  getUsers().then((data => {
    console.log('Here we have the users', data);
  }));
}

async function getUsers() {
  console.log('getUsers()');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = res.json();
  return data;
}

init();
