var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--nojs"),navMain.classList.remove("main-nav--opened"),navMain.classList.add("main-nav--closed"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))});var modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnProductWeek=document.querySelector(".product-week__btn"),btnCatalogItems=document.querySelectorAll(".catalog-item__btn");if(btnProductWeek&&btnProductWeek.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal--show"),overlay.classList.add("overlay--show")}),0!==btnCatalogItems.length)for(var i=0;i<btnCatalogItems.length;i++)btnCatalogItems[i].addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal--show"),overlay.classList.add("overlay--show")});overlay&&overlay.addEventListener("click",function(){overlay.classList.contains("overlay--show")&&(modal.classList.remove("modal--show"),overlay.classList.remove("overlay--show"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("modal--show")&&(modal.classList.remove("modal--show"),overlay.classList.remove("overlay--show"))});var radioLabels=document.querySelectorAll(".order-form__radio-value"),checkboxLabels=document.querySelectorAll(".order-form__checkbox-value");if(radioLabels)for(i=0;i<radioLabels.length;i++)radioLabels[i].addEventListener("keydown",function(e){13===e.keyCode&&this.click()});if(checkboxLabels)for(i=0;i<checkboxLabels.length;i++)checkboxLabels[i].addEventListener("keydown",function(e){13===e.keyCode&&this.click()});