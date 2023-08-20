import { createClient } from '../node_modules/@supabase/supabase-js'

//const createClient = require('@supabase/supabase-js').createClient

//const createClient = require('../node_modules/@supabase/supabase-js').createClient

//import storage from '@supabase/storage-js';


const supabaseUrl = 'https://flnstibhtmobvbineags.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsbnN0aWJodG1vYnZiaW5lYWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDYyOTY1MSwiZXhwIjoyMDA2MjA1NjUxfQ.xqn4sjQLhQt-Sv642qWwGa0TTYxNK1y0e-uXkBYyyKs"


const supabase = createClient( supabaseUrl, supabaseKey, {auth: { persistSession: false }});


function rand(){
    console.log("Just chillin")
    alert("WBU?")
}


function tempo(event) {
    console.log('huehue?')
    console.log(event.target.value)
}



const logincheck = async () => {
    let { data, error } = await supabase
    .from('User')
    .select()
    if(data){
    console.log(data)
}
}

//console.log(logincheck())


function formCheck(event){
    console.log(event)
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    console.log(email);
}

export default supabase
