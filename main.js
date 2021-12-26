let container = document.querySelector('.container')


fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`)
    .then(response => response.json())
    .then(data => data.results.forEach(el => {
        let img = document.createElement('img')
        container.appendChild(img)
        fetch(el.url)
            .then(response => response.json())
            .then(data => data.sprites.other.dream_world.front_default)
            .then(url => img.setAttribute('src', url))
    }))
