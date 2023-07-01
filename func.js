
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://nxuphimrivlarzgkpxjd.supabase.co';
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dXBoaW1yaXZsYXJ6Z2tweGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMDA4NzMsImV4cCI6MjAwMzY3Njg3M30.twe-QoNg4enG7Wk_uXplo-lFg4xI47JuSeoAe9anjq8";
// const supabase = createClient(supabaseUrl, supabaseKey);

// console.log(supabase)

// export async function fetchRows() {
//     const { data, error } = await supabase.from('Users').select('*');
    
//     if (error) {
//       console.error('Error fetching rows:', error.message);
//       return;
//     }
    
//     console.log('Fetched rows:', data);
//   }

// import express, { json } from 'express'
// import cors from 'cors'
// import Users  from './config.js'
// const app = express()
// app.use(json())
// app.use(cors())

// async function postData(email,user_name,password) {
//     await add(email,user_name,password)
// }

// postData('Buddha@nitk.edu.in','Buddha','1234567890')


// //   fetchRows()




function handlePosts() {
    console.log('posts buddha')
    var main = document.createElement("h1");
    main.style.fontWeight='900';
    main.innerText="Fee Payement details"
    var matter = document.createElement("p")
    matter.innerText = "Please Pay the Fee if not Paid and ignore if paid already"
    var contain = document.createElement("div")
    contain.style.margin='25px'
    contain.style.padding = '15px'
    contain.style.marginTop = '10px'
    contain.style.cursor='pointer'
    contain.style.width = '60em'
    contain.style.height = '15vh'
    contain.style.boxShadow = "3px 3px 3px 2px rgba(0,0,0,.8)"
    contain.setAttribute("onclick","alert_func();");
    contain.appendChild(main)
    contain.appendChild(matter)
    console.log(contain)
    document.getElementById('main_posts').innerHTML = contain.outerHTML
    for(let i=0;i<10;i++){
        document.getElementById('main_posts').innerHTML += contain.outerHTML
    }
}


function addPost(){
    const title = prompt("Please Enter the title of the Announcement : ")
    const desc = prompt("Please Enter the description of the Announcement : ")
    console.log(title)
    console.log(desc)
    var main = document.createElement("h1");
    main.style.fontWeight='900';
    main.innerText=title
    var matter = document.createElement("p")
    matter.innerText = desc
    var contain = document.createElement("div")
    contain.style.margin='25px'
    contain.style.padding = '15px'
    contain.style.marginTop = '10px'
    contain.style.cursor='pointer'
    contain.style.width = '60em'
    contain.style.height = '15vh'
    contain.style.boxShadow = "3px 3px 3px 2px rgba(0,0,0,.8)"
    //contain.setAttribute("onclick","alert_func();");
    contain.appendChild(main)
    contain.appendChild(matter)
    console.log(contain)
    document.getElementById('main_posts').innerHTML = contain.outerHTML + document.getElementById('main_posts').innerHTML


}
