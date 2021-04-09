document.addEventListener("DOMContentLoaded", () => {
    let pause = 0;
    const pauseButton = document.querySelector('#pause');

    let counter = document.querySelector('#counter');
    let seconds = 0;

    const minus = document.querySelector('#minus');
    const plus = document.querySelector('#plus');
    const heart = document.querySelector('#heart');

    const likeMap = {};

    const submit = document.querySelector('#comment-form');
    

     let id = setInterval(function() {
         counter.innerHTML = seconds++;
      }, 1000);

    minus.addEventListener('click', (e) => {
       counter.innerHTML = seconds--;
    });
       plus.addEventListener('click', (e) => {
            counter.innerHTML = seconds++;
    });
    heart.addEventListener('click', (e) => {
        const likes = document.querySelector('.likes');
        const li = document.createElement('li');
        if (likeMap[`${counter.innerHTML}`]){
            likeMap[`${counter.innerHTML}`] += 1;
            li.innerText = `${counter.innerHTML} has been liked ${likeMap[`${counter.innerHTML}`]} times`;
            likes.append(li);
        } else {
            likeMap[`${counter.innerHTML}`] = 1;
            li.innerText = `${counter.innerHTML} has been liked ${likeMap[`${counter.innerHTML}`]} time`;
            likes.append(li);
        }
    });

    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = document.querySelector('#comment-input').value;
        const list = document.querySelector('#list');
        const li = document.createElement('li');
        li.innerText = comment;
        list.append(li);
        e.target.reset();
    });

    pauseButton.addEventListener('click', (e) => {
        if (!pause){
            clearInterval(id);
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            pause = 1;
            pauseButton.innerHTML = 'resume';
        } else {
            id = setInterval(function() {
                counter.innerHTML = seconds++;
            }, 1000);
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            pause = 0;
            pauseButton.innerHTML = 'pause';
        }
    });
});