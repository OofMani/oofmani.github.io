
    setTimeout(() => {
        document.getElementById('sign').style.opacity=1;
        }, 5000);
    


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.target)
        if (entry.isIntersecting) {
            

            entry.target.classList.add('show');
            
        }else{
            entry.target.classList.remove('show');
        }
    });
});





// m_title = document.getElementById('m_title');
// m_sec = document.getElementById('m_sec');
// if(m_sec.classList.contains('show')){
//     console.log("m_sec is show");
//     m_title.classList.remove('mario_none');
//     m_title.classList.add('mario');
// }else{
//     console.log("msecnot show");
// }



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

// Hamburger toggle functionality
document.getElementById('hamburger').addEventListener('click', () => {
    console.log("Hamburger clicked");
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
});

// Close the menu if the overlay is clicked
document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});
