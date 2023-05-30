

const inputArea = document.querySelector('.comment-block-input__input');
const sendBtn = document.querySelector('.comment-block-input__button');

const comments = document.querySelector('.comments-content__arr');

const showMoreBtn = document.querySelector('.fb-comment__more');

showMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.hidden').classList.remove('hidden');
    showMoreBtn.classList.add('hidden');
});


inputArea.addEventListener('change', (e) => {
    e.preventDefault();
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        inputArea.value == false ? console.log('10') : addComment();
    })
});

function addComment(){
    const commentsArr = Array.from(comments.children)
    commentsArr.unshift(inputArea.value);
    const b = document.createElement('div');
    b.classList.add('fb-comment__item');
    b.innerHTML = `
    <a href="#" target="_blank" class="flux_cta">
        <img src="./assets/images/facebook-user-icon-4.webp" alt="" class="fb-comment__avatar flux_cta">
    </a>
    <div class="fb-comment__content">
        <div class="fb-comment__text">
            <div class="fb-comment__author-flex">
                <a href="#" target="_blank"
                    class="fb-comment__author flux_cta">Guest</a>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <span class="fb-comment__author-time">Right now</span>
            ${inputArea.value}
        </div>
        <div>
            <a class="fb-comment__react flux_cta" href="#"
                target="_blank">Reply</a>
            <a class="fb-comment__react flux_cta" href="#"
                target="_blank">
                <i class="far fa-thumbs-up"></i>0
                <i class="far fa-thumbs-down"></i>0
            </a>
            <span class="fb-comment__posted">Share</span>
        </div>
    </div>
    `;
    
    comments.insertBefore(b, comments.firstChild);
    inputArea.value = ''
}
