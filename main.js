let container = document.querySelector('.container')


fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`)
    .then(response => response.json())
    .then(data => data.results.forEach(el => {
        let img = document.createElement('img')
        let h2 = document.createElement('h2')
        h2.textContent = el.name.charAt(0).toUpperCase() + el.name.slice(1)
        container.appendChild(h2)

        container.appendChild(img)
        fetch(el.url)
            .then(response => response.json())
            .then(data => data.sprites.other.dream_world.front_default)
            .then(url => img.setAttribute('src', url))
    }))
