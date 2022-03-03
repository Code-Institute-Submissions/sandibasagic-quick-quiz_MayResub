function toggle() {
    const sectionHome = document.getElementById('sectionHome');
    if(sectionHome.style.display === "none") {
        sectionHome.style.display = "block";
    }
    else {
        sectionHome.style.display = "none";
    }
};
const question = document.getElementById('question')
const choices =document.getElementsByClassName('choice-text');
