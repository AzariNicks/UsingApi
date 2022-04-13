


const cl = (thing) => {console.log(thing)}
const shortcut = () =>(cl('hey man'))
  Button = document.querySelector('button')

Button.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {let stuff = res.data.results[0].residents
         for(let i = 0; i < stuff.length;i++){
             axios.get(stuff[i])
             .then((res2) => {
                 cl(res2)
                     let h1 = document.createElement('h1')
                     h1.textContent =  res2.data.name
                     document.querySelector('body').appendChild(h1)
                     console.log(h1)





             } )
             
            
            
            
        // console.log(stuff[i])
        //     let h1 = document.createElement('h3')
        //     h1.textContent = stuff[i]
        //     document.querySelector('body').appendChild(h1)
        //     console.log(h1)
        
        
        }



    })
    .catch((error) =>
        console.log(error)
    )


})

