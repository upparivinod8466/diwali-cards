// //building html element
// document.body.innerHTML=`<div class="heading-container">
// <h1>brewary list </h1>
// <img class="icon" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/4a/58/7d/the-brewary-kettle.jpg" width="50px" height="50px" alt="icon">
// </div>
// <div id="maincontainer" class="main-xontainer"></div>
// `;

// const getdata=async()=>{
//     //fetch the data from the api
//     try {
//         const data=await fetch("https://api.openbrewerydb.org/breweries")
//         const brewaries=await data.json();
//         console.log(data)
//         maincontainer.innerHTML="";
//         brewaries.forEach((brewary)=>{
//             display(brewary)
//         })
//     } catch (error) {
//         }
// }

// getdata();
// const dispalydata=(obj)=>{
//     maincontainer.innerHTML+=`
//     <div class="container>
//     <h3 class="blue">brewary Name:<span>${obj.name}</span></h3>
//     <h3 class="blue">brewary city:<span>${obj.city}</span></h3>
//     <h3 class="blue">brewary address:<span>${obj.address}</span></h3>
//     <h3 class="blue">brewary state:<span>${obj.state}</span></h3>
//     </div>`
// }


