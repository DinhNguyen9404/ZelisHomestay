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
    
    //DETAILS: Thumbnails horizontal wheel
    const scrollable = document.querySelector(".thumbnails");
    scrollable.addEventListener("wheel", (event) =>{
        console.log(event);
        event.preventDefault();
    
        scrollable.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        });
    });
    
    //Thumbnails slider
    const items = document.querySelectorAll(".preview-list .item");
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');
    const thumbnails = document.querySelectorAll('.thumbnails .item');
    
    let countItem = items.length;
    let itemActive = 0;
    
    nextBtn.addEventListener("click", () =>{
        itemActive += 1;
        if(itemActive >= countItem){
            itemActive = 0;
        };
        showSlider();
    });
    
    prevBtn.addEventListener('click', () =>{
        itemActive -= 1;
        if(itemActive < 0){
            itemActive = countItem -1;
        }
        showSlider();
    })
    
    thumbnails.forEach((thumbnail, index) =>{
        thumbnail.addEventListener('click', () =>{
            itemActive = index;
            showSlider();
        })
    })
    
    function showSlider(){
        let activatedItems = document.querySelectorAll(".preview-slider .item.active");
        activatedItems.forEach(element => {
            element.classList.remove("active");
        });
    
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    }
    
    
    // SUB MENU
    const subs = document.querySelectorAll(".sub-menu-navbar span");
    const tabs = document.querySelectorAll(".sub-menu-tabs > div");
    
    let tabActive = 0;
    
    subs.forEach((sub, index) =>{
        sub.addEventListener("click", ()=>{
            tabActive = index;
            Active();
        })
        console.log(tabs.length);
    })
    
    function Active(){
        subs.forEach((sub) =>{
            sub.classList.remove("active");
        })
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        })
    
        subs[tabActive].classList.add("active");
        tabs[tabActive].classList.add("active");
    }
}

