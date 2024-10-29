const apiKey='UkdomiVzNarj4C6wsCT2cnKcfJ61e1e1';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp => resp.json())
            .then(({data}) => {

                const {url}= data.images.original;

                const img =document.createElement('img');

                img.src = url;

                document.body.append(img);


            })
            .catch(console.warn);