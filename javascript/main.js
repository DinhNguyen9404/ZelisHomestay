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
    
    // Filter Button
    const filterBtn = document.querySelector(".filterBtn");
    const filterBox = document.querySelector(".filter-box");
    
    filterBtn.addEventListener("click", () =>{
        console.log("filter");
        filterBox.classList.toggle("active");
    })
    
    //Filter: Price Range
    let minVal = document.getElementById('min-value');
    let maxVal = document.getElementById('max-value');
    
    const rangeFill = document.querySelector(".range-fill");
    
    const inputElements = document.querySelectorAll(".price-range input");
    
    function validateRange(){
        let minPrice = parseInt(inputElements[0].value);
        let maxPrice = parseInt(inputElements[1].value);
    
        if(minPrice > maxPrice){
            let temp = maxPrice;
            maxPrice = minPrice;
            minPrice = temp;
        }
    
        console.log(minPrice);
    
        minVal.innerHTML = minPrice + " VNĐ";
        maxVal.innerHTML = maxPrice + " VNĐ"; 
    }
    
    // Menu Slide Filter 
    const checks = document.querySelectorAll(".rating-checkbox input");
    checks.forEach((check)=>{
        
    })
    
    const ratings = document.querySelectorAll(".menu-item .rate");
    ratings.forEach((rating)=>{
        rating.querySelectorAll(".bxs-star");
    })
    
    
    
    inputElements.forEach((elenemt) =>{
        elenemt.addEventListener("input", validateRange);
    });
    
    // Trending location slider
    const trendSlider = document.querySelector(".trending-container");
    const SliderImg = document.querySelectorAll(".trending-container img")[0];
    console.log(SliderImg.clientWidth);
    let ImgWidth = SliderImg.clientWidth + 20;
    
    const nextSlider = document.querySelector(".trending-next");
    const prevSlider = document.querySelector(".trending-prev");
    
    nextSlider.addEventListener("click", ()=>{
        trendSlider.scrollLeft += ImgWidth;
    })
    
    prevSlider.addEventListener("click", ()=>{
        trendSlider.scrollLeft -= ImgWidth;
    })
    
    
    
    
    // FAQS
    //show/hide faq answer
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq =>{
        faq.addEventListener('click', ()=>{
            faq.classList.toggle('open');
            //change icon
            const icon = faq.querySelector('.faq__icon i');
            if(icon.className === 'bx bx-plus'){
                icon.className = "bx bx-minus";
            }
            else{
                icon.className = "bx bx-plus";
            }
        });
    });
    
}











