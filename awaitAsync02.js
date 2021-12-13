require('isomorphic-fetch')
const getPostAsync = async(idPost) => {
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        const post = await resPost.json();

        console.log(post);

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const User = await resUser.json();

        console.log(User);
    } catch (error) {
        console.log(userId);


    }

}
getPostAsync(80);