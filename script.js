
 POST 
axios.post('https://reqres.in/api/users',{
    name: "Cloudio",
    job: "Footballer"
})
.then((res)=> console.log(res))
.catch((err)=> console.log(err)) 
