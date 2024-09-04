window.onload = function(){
    const sidebarOpen = document.querySelector(".sidebarOpen");
    const sidebarClose = document.querySelector(".sidebarClose");
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    
    sidebarOpen.addEventListener('click', () =>{
        nav.classList.add("active");
    })
    
    body.addEventListener('click', (e) =>{
        let clickedElement = e.target;
        if(!clickedElement.classList.contains("sidebarOpen") && !clickedElement.classList.contains("menu")){
            nav.classList.remove("active");
        }
    })
    
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUp = document.querySelector('.container .sign-up');
    const signIn = document.querySelector('.container .sign-in');
    
    
    registerBtn.addEventListener("click", () =>{
        container.classList.add("active");
        signUp.classList.add("active");
        signIn.classList.add("active");
    });
    
    loginBtn.addEventListener("click", () =>{
        container.classList.remove("active");
        signUp.classList.remove("active");
        signIn.classList.remove("active");
    });
}
