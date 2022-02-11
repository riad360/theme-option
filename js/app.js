
const tab_menu = document.querySelectorAll('.tab-menu ul li a');
const tab_content_all = document.querySelectorAll('.arif-tab .tab-content');

tab_menu.forEach(items => {
    items.addEventListener('click', function(e){
     e.preventDefault();

     tab_menu.forEach(data => {
         data.classList.remove('active')
     })
       this.classList.add('active')


    const tab_content = document.querySelector(this.getAttribute('href'))

    tab_content_all.forEach(item => {
        item.classList.remove('active')
    })
    
    tab_content.classList.add('active')

    })
})