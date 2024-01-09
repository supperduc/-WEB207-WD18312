// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>heading</h1>'

// console.log(boxElement);


var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
   
    for(let i = 0; i < courses.length; i ++){
        courses[i] = `<li>${courses[i]}</li>`;
    }
    var ul = document.querySelector('ul');
    ul.innerHTML = courses.join();
    console.log(courses);
}
render(courses);