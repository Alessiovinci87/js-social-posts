document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const likedPosts = new Set();
  

    function handleLikeButtonClick(event) {
      event.preventDefault();
      
      const likeButton = event.target;
      const postId = likeButton.dataset.postid;
      const postLikesCounter = likeButton.nextElementSibling;
  
      if (likedPosts.has(postId)) {

        likedPosts.delete(postId);
        likeButton.classList.remove('like-button--liked');
        postLikesCounter.textContent = parseInt(postLikesCounter.textContent) - 1;
      } else {

        likedPosts.add(postId);
        likeButton.classList.add('like-button--liked');
        postLikesCounter.textContent = parseInt(postLikesCounter.textContent) + 1;
      }
    }

    const posts = [
      {
        id: 1,
        author: 'Batman',
        profilePic: 'https://unsplash.it/300/300?image=15',
        date: '06-28-2023',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 130
      },
      {
        id: 2,
        author: 'Joker',
        profilePic: 'https://unsplash.it/300/300?image=25',
        date: '06-27-2023',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://unsplash.it/600/300?image=143',
        likes: 120
      },
      {
        id: 3,
        author: 'Pinguino',
        profilePic: 'https://unsplash.it/300/300?image=65',
        date: '06-27-2023',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://unsplash.it/600/300?image=133',
        likes: 80
      },
    ];
  
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  

      postElement.innerHTML = `
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src="${post.profilePic}" alt="${post.author}">
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${post.author}</div>
              <div class="post-meta__time">${post.date}</div>
            </div>
          </div>
        </div>
        <div class="post__text">${post.text}</div>
        <div class="post__image">
          <img src="${post.image}" alt="">
        </div>
        <div class="post__footer">
          <div class="likes">
            <div class="likes__cta">
              <a href="#" class="like-button" data-postid="${post.id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </a>
            </div>
            <div class="likes__counter">${post.likes}</div>
          </div>
        </div>
      `;
  
      container.appendChild(postElement);
    });
  

    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(likeButton => {
      likeButton.addEventListener('click', handleLikeButtonClick);
    });
  });
  