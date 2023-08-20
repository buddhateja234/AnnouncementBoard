
import { createClient } from '@supabase/supabase-js'
//import storage from '@supabase/storage-js';


const supabaseUrl = 'https://flnstibhtmobvbineags.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsbnN0aWJodG1vYnZiaW5lYWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDYyOTY1MSwiZXhwIjoyMDA2MjA1NjUxfQ.xqn4sjQLhQt-Sv642qWwGa0TTYxNK1y0e-uXkBYyyKs"


const supabase = createClient( supabaseUrl, supabaseKey, {auth: { persistSession: false }});



// var {data,error} = supabase
// console.log(supabase.from('User').select())

const logincheck = async () => {
    let { data, error } = await supabase
    .from('User')
    .select()
    if(data){
    console.log(data)
}
}

// const insertUser = async () =>{
//     const { data, error } = await supabase
//   .from('User')
//   .insert([
//     { 'e-mail': 'adarsh@nitk.edu.in', 'username': 'adarsh786','password': 'hello123'},
//   ])
//   .select()
//   console.log(data)
// }

// insertUser()

//updating the posts

// const getPost = async () => {
//     const { data, error } = await supabase
//   .from('Posts')
//   .select()
//   console.log(data[0]["posts"])
// }
// getPost()

const updatePost = async () =>{
    var username = 'buddhateja234';
    var { data, error } = await supabase
  .from('Posts')
  .select()
  .eq('username',username)
    //console.log(data[0])
    var temp = [{"post":"posting","headline":"heading"}]
    const email = data[0]['e-mail']
    //console.log(data[0]['username'])
    temp = data[0]['posts'].concat(temp)
    //console.log(temp)
    const { data1, error1 } = await supabase
 .from('Posts')
 .update({'e-mail':email,'username':username,'posts':temp})
 .eq('username',username)



}

//updatePost()

const { data, error2 } = await supabase
.from('Posts')
.select()
.eq('username','buddhateja234')
console.log('Naya : ',data[0])


