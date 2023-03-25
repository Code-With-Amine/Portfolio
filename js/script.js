const images = document.querySelectorAll('.animate');

images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.classList.add('rotate');
    });

});

const seeMore = document.getElementById('seeMore');
seeMore.addEventListener('click',() =>{
    const showMoreSkills = document.getElementById('otherSkills');
    showMoreSkills.style.display = "flex";
    seeMore.classList.add('d-none')
}
)

const seeMoreProjects = document.getElementById('seeMoreProjects');
seeMoreProjects.addEventListener('click',() => {
    const seeProjects = document.getElementById('showProjects')
    seeProjects.style.display = "flex";
    seeMoreProjects.classList.add('d-none')
})