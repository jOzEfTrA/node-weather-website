let form = document.querySelector('form')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
form.addEventListener('submit',(e)=>{
    p2.innerHTML=''
    p1.innerHTML='Loading...'
    e.preventDefault()
    let location = input.value
    console.log(location)
    fetch(`http://localhost:3000/weather?address=${encodeURIComponent(location) }`).then(response =>{
    response.json().then(json=>{
        console.log(json)
        if(json.error){
            p1.innerHTML=''
            p2.innerHTML=json.error
        }else if(json.url){
            p1.innerHTML=json.location
            if(json.location.length>50){
                p2.innerHTML = `${json.description}\nThe Temp is ${json.temp}\n and the Speed of the wind is ${json.windSpeed}`
            }else{
                p2.innerHTML = `${json.description}\nTemp of ${json.location} is ${json.temp}\n and the Speed of the wind is ${json.windSpeed}`
            }
        }
        input.value=''
    })
})
})
