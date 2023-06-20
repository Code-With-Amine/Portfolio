
document.addEventListener('DOMContentLoaded', () => {
    const seeMore = document.getElementById('seeMoreSkills');
    const showMoreSkills = document.getElementById('otherSkills');

    seeMore.addEventListener('click', () => {
        if (seeMore.checked) {
            showMoreSkills.style.display = 'flex';
        } else {
            showMoreSkills.style.display = 'none';
        }
    });

    const seeMoreProjects = document.getElementById('seeMoreProjects');
    const showProjects = document.getElementById('showProjects');

    seeMoreProjects.addEventListener('click', () => {
        if (seeMoreProjects.checked) {
            showProjects.style.display = 'flex';
        } else {
            showProjects.style.display = 'none';
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