
document.addEventListener('DOMContentLoaded', () => {
    const seeMore = document.getElementById('seeMore');
    const showMoreSkills = document.getElementById('otherSkills');

    seeMore.addEventListener('click', () => {
        if (showMoreSkills.style.display === 'none') {
            showMoreSkills.style.display = 'flex';
            seeMore.textContent = 'See less';
        } else {
            showMoreSkills.style.display = 'none';
            seeMore.textContent = 'See more...';
        }
    });

    const seeMoreProjects = document.getElementById('seeMoreProjects');
    const showProjects = document.getElementById('showProjects');

    seeMoreProjects.addEventListener('click', () => {
        if (showProjects.style.display === 'none') {
            showProjects.style.display = 'flex';
            seeMoreProjects.textContent = 'See less';
        } else {
            showProjects.style.display = 'none';
            seeMoreProjects.textContent = 'See more...';
        }
    });

    let expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        let cardText = button.parentNode.querySelector(".card-text");
  
        if (button.checked) {
          cardText.style.webkitLineClamp = "unset";
         
        } else {
          cardText.style.webkitLineClamp = "2";
        }
      });
    });

    });