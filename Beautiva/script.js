const abt = document.querySelector('.abt');
const service=document.querySelector('.service');
const blog=document.querySelector('.blog');
const home = document.querySelector('.home');
const book = document.querySelector('.book-btn');
const contact = document.querySelector('.contact');
const homePage = document.querySelector('.home-page');
const aboutPage = document.querySelector('.about-us-page');
const servicePage = document.querySelector('.service-page');
const blogPage = document.querySelector('.blog-page');
const conatctPage = document.querySelector('.contact-us-page');
const bookPage = document.querySelector('.book-now-page');
const aptBtn= document.querySelector('.service-apt-btn');


// abt.addEventListener('click' , goToLoginPage());

home.addEventListener('click' , ()=>{
   

    homePage.style.display = 'block';
    aboutPage.style.display='none';
    servicePage.style.display='none';
    blogPage.style.display='none';
    conatctPage.style.display='none';
    bookPage.style.display='none';

})



abt.addEventListener('click' , ()=>{
    

    homePage.style.display = 'none';
    aboutPage.style.display='block';
    servicePage.style.display='none';
    blogPage.style.display='none';
    conatctPage.style.display='none';
    bookPage.style.display='none';
})

service.addEventListener('click' , ()=>{
    homePage.style.display = 'none';
    servicePage.style.display='grid';
    aboutPage.style.display='none';
    blogPage.style.display='none';
    conatctPage.style.display='none';
    bookPage.style.display='none';
})

blog.addEventListener('click' , ()=>{
    

    homePage.style.display = 'none';
    servicePage.style.display='none';
    aboutPage.style.display='none';
    blogPage.style.display='block';
    conatctPage.style.display='none';
    bookPage.style.display='none';
})

contact.addEventListener('click' , ()=>{
    

    homePage.style.display = 'none';
    servicePage.style.display='none';
    aboutPage.style.display='none';
    blogPage.style.display='none';
    conatctPage.style.display='block';
    bookPage.style.display='none';
})

book.addEventListener('click' , ()=>{
    

    homePage.style.display = 'none';
    servicePage.style.display='none';
    aboutPage.style.display='none';
    blogPage.style.display='none';
    conatctPage.style.display='none';
    bookPage.style.display='block'
})

aptBtn.addEventListener('click' , ()=>{
    

    homePage.style.display = 'none';
    servicePage.style.display='none';
    aboutPage.style.display='none';
    blogPage.style.display='none';
    conatctPage.style.display='none';
    bookPage.style.display='block'
})



