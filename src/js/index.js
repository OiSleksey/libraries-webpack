import '../sass/style.sass';
import Comment from './Comment';
import userAvatar from '../img/user.jpg';
import * as bootstrap from 'bootstrap';

// const input = document.querySelector('.el-switch__core');
const comment = new Comment('Lesson 6 about Webpack!!!', userAvatar);

console.log(comment.toString());

// input.addEventListener('click', e => {
//   document.querySelector('.el-switch').classList.toggle('is-checked');
//   // console.log(document.querySelector('.el-switch'));
// });
