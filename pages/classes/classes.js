
let AllClasses = [
    {id:1,
    maintitle:'دکارت',
    datetitle:"1401/12/2",
},
{id:2,
    maintitle:'هگل',
    datetitle:"1398/5/7",
},
{id:3,
    maintitle:'کانت',
    datetitle:"1398/5/7",
},
{id:4,
    maintitle:'اسپینوزا',
    datetitle:"1388/5/7",
},
{id:5,
    maintitle:'فلسفه تحلیلی',
    datetitle:"1388/5/7",
},
{id:5,
    maintitle:'فلسفه غرب',
    datetitle:"1388/5/7",
}
]


let Allaudio=[
    {id:1,
    src:"../../media/حمد (۱۷۱).aac",
    title:'11'},
    {id:2,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22'},
    {id:3,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22'},
    {id:4,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22'},
    {id:5,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22'},
    {id:6,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:7,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:8,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:9,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:10,
        src:"../../media/حمد (۱۷۱).aac",
        title:'11'},
    {id:11,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:12,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:13,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:14,
         src:"../../media/حمد (۱۷۱).aac",
         title:'22'},
    {id:15,
        src:"../../media/حمد (۱۷۱).aac",
         title:'22'},
     {id:16,
         src:"../../media/حمد (۱۷۱).aac",
         title:'22'},
     {id:17,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},

]



let AllaudioHegel=[
    {id:1,
    src:"../../media/حمد (۱۷۱).aac",
    title:'11hegel'},
    {id:2,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22hegel'},
    {id:3,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22hegel'},
    {id:4,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22hegel'},
    {id:5,
    src:"../../media/حمد (۱۷۱).aac",
    title:'22hegel'},
    {id:6,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22hegel'},
    {id:7,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:8,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:9,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:10,
        src:"../../media/حمد (۱۷۱).aac",
        title:'11'},
    {id:11,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:12,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:13,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},
    {id:14,
         src:"../../media/حمد (۱۷۱).aac",
         title:'22'},
    {id:15,
        src:"../../media/حمد (۱۷۱).aac",
         title:'22'},
     {id:16,
         src:"../../media/حمد (۱۷۱).aac",
         title:'22'},
     {id:17,
        src:"../../media/حمد (۱۷۱).aac",
        title:'22'},

]
const boxAudio=document.querySelector('.box-class_audio')
const boxClassesTitle=document.querySelector('.box-classes_title')
const audiobox=document.querySelector('.audio')
const tilteBoxaudio= document.querySelector(".class-box_title-text")

const items = document.querySelectorAll(".mosahebe-left_item")
const spanTitle=document.querySelector(".span-title")
const dateTitle=document.querySelector(".date-title")

items.forEach(item => {
    item.addEventListener("click" , function() {
        let idName= item.id-1
        boxClassesTitle.innerHTML=AllClasses[idName].maintitle
        spanTitle.innerHTML=AllClasses[idName].maintitle
        dateTitle.innerHTML=AllClasses[idName].datetitle
})

 })

 const tablee=document.querySelector("table")



 let userListContainer = document.querySelector('#list')
 let paginationContainer = document.querySelector('#pagination')

 let currentPage = 1

 let rowsCount = 6

 function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
     usersContainer.innerHTML = ''

     let endIndex = rowsCount * currentPage
     let startIndex = endIndex - rowsCount

     let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)
 console.log(paginatedUsers)
 paginatedUsers.forEach( ad => {
     
     tablee.insertAdjacentHTML('beforeend' , `<tr>
     <td class="class-box_audio">
         <div  class="box-class_audio">
         <audio class="audio" controls src="`+ ad.src+`"></audio>
         <a class="class-audio_download" href="`+ ad.src+`"> دانلود </a>
         </div>
     </td>
     <td class="class-box_title-text">` + ad.title +`</td>
     <td class="class-box_number-text">`+ ad.id + `</td>

 </tr>`)
 })
 

 }



 function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
     // Codes

     pagesContainer.innerHTML = ''

     let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

     for (let i = 1 ; i < pageCount + 1 ; i++) {
         let btn = paginationButtonGenerator(i, allUesrsArray)
         pagesContainer.appendChild(btn)
     }

 }
 function paginationButtonGenerator (page, allUesrsArray) {
     let button = document.createElement('button')
     button.innerHTML = page

     if (page === currentPage) {
         button.classList.add('active')
     }

     button.addEventListener('click', function () {
         currentPage = page
         displayUesrsList(Allaudio, tablee, rowsCount, currentPage)

         let prevPage = document.querySelector('button.active')
         prevPage.classList.remove('active')

         button.classList.add('active')


     })

     return button
}
displayUesrsList(Allaudio, tablee, rowsCount, currentPage)
setupPagination(Allaudio, paginationContainer, rowsCount)



        function mo(){  
        let userListContainer = document.querySelector('#list')
        let paginationContainer = document.querySelector('#pagination')

        let currentPage = 1

        let rowsCount = 6

        function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
            usersContainer.innerHTML = ''

            let endIndex = rowsCount * currentPage
            let startIndex = endIndex - rowsCount

            let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)
        console.log(paginatedUsers)
        paginatedUsers.forEach( ad => {
            
            tablee.insertAdjacentHTML('beforeend' , `<tr>
            <td class="class-box_audio">
                <div  class="box-class_audio">
                <audio class="audio" controls src="`+ ad.src+`"></audio>
                <a class="class-audio_download" href="`+ ad.src+`"> دانلود </a>
                </div>
            </td>
            <td class="class-box_title-text">` + ad.title +`</td>
            <td class="class-box_number-text">`+ ad.id + `</td>

        </tr>`)
        })
        

        }



        function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
            // Codes

            pagesContainer.innerHTML = ''

            let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

            for (let i = 1 ; i < pageCount + 1 ; i++) {
                let btn = paginationButtonGenerator(i, allUesrsArray)
                pagesContainer.appendChild(btn)
            }

        }
        function paginationButtonGenerator (page, allUesrsArray) {
            let button = document.createElement('button')
            button.innerHTML = page

            if (page === currentPage) {
                button.classList.add('active')
            }

            button.addEventListener('click', function () {
                currentPage = page
                displayUesrsList(Allaudio, tablee, rowsCount, currentPage)

                let prevPage = document.querySelector('button.active')
                prevPage.classList.remove('active')

                button.classList.add('active')


            })

            return button
    }
    displayUesrsList(Allaudio, tablee, rowsCount, currentPage)
    setupPagination(Allaudio, paginationContainer, rowsCount)
}
// ////////////////////////////////////////////////////////////////
 function ko(){
    let userListContainer = document.querySelector('#list')
    let paginationContainer = document.querySelector('#pagination')

    let currentPage = 1

    let rowsCount = 6

    function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
        usersContainer.innerHTML = ''

        let endIndex = rowsCount * currentPage
        let startIndex = endIndex - rowsCount

        let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)
    console.log(paginatedUsers)
    paginatedUsers.forEach( ad => {
        
        tablee.insertAdjacentHTML('beforeend' , `<tr>
        <td class="class-box_audio">
            <div  class="box-class_audio">
            <audio class="audio" controls src="`+ ad.src+`"></audio>
            <a class="class-audio_download" href="`+ ad.src+`"> دانلود </a>
            </div>
        </td>
        <td class="class-box_title-text">` + ad.title +`</td>
        <td class="class-box_number-text">`+ ad.id + `</td>

    </tr>`)
    })
    }
    function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
        // Codes

        pagesContainer.innerHTML = ''

        let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

        for (let i = 1 ; i < pageCount + 1 ; i++) {
            let btn = paginationButtonGenerator(i, allUesrsArray)
            pagesContainer.appendChild(btn)
        }

    }
    function paginationButtonGenerator (page, allUesrsArray) {
        let button = document.createElement('button')
        button.innerHTML = page

        if (page === currentPage) {
            button.classList.add('active')
        }

        button.addEventListener('click', function () {
            currentPage = page
            displayUesrsList(AllaudioHegel, tablee, rowsCount, currentPage)

            let prevPage = document.querySelector('button.active')
            prevPage.classList.remove('active')

            button.classList.add('active')


        })

        return button
}
displayUesrsList(AllaudioHegel, tablee, rowsCount, currentPage)
setupPagination(AllaudioHegel, paginationContainer, rowsCount)
     console.log("nnnnnnnn")
 }






 
