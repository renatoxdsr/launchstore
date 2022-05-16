/* const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card'); */
/* for(let card of cards) {
    card.addEventListener("click", function() {
        /* modalOverlay.classList.add('active'); */
        //pegar o atributo do video de cada video para rodar
        /* const videoId = card.getAttribute("id");
        // redirecionar o card para a pagina que deseja
        window.location.href = `/video?id=${videoId}`;
        //pegar o iframe e colocar os videos conforme os grids
        /* modalOverlay.querySelector("iframe").src= `https://www.youtube.com/embed/${videoId}`; */
/*     });
}; */

/* document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    //remover o video, colocando o scr vazio
    //assim o video vai parar de rodar quando fechar o modal
    modalOverlay.querySelector("iframe").src ="";
}); */

const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")
//Use Includes Method - to include strings
for (item of menuItems) {
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

//Paginacao
//totalPages = 20
// selectedPage = 6
//[1, ...,13, 14, 15, 16, 17,... 20]
function paginate(selectedPage, totalPages){
    
    let pages = [],
        oldPage

    for(let currentPage = 1; currentPage <= totalPages; currentPage++){

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

        if(firstAndLastPage || pagesAfterSelectedPage && pagesBeforeSelectedPage){
            

            if(oldPage && currentPage - oldPage > 2){
                pages.push("...")
            }

            if(oldPage && currentPage - oldPage == 2){
                pages.push(oldPage + 1)
            }
            pages.push(currentPage)

            oldPage = currentPage
        }
    }

    return(pages)
};

function createPagination(pagination){
    const filter = pagination.dataset.filter;
    const page = +pagination.dataset.page;
    const total = +pagination.dataset.total;
    const pages = paginate(page, total);

    console.log(pages)
    let elements = " "

    for (let page of pages) {
        if(String(page).includes("...")){
            elements += `<span>${page}</span>`
    } else{
        if(filter) {
            elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
        } else {
            elements += `<a href="?page=${page}">${page}</a>`
        }
    }}

    pagination.innerHTML = elements
}

const pagination = document.querySelector(".pagination");

if(pagination){
    createPagination(pagination)
}
