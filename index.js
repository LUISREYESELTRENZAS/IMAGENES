const cat ="https://cataas.com/cat";

function getCatImage() {
    getRandomCatImage(cat, "cat-random")
}


const getRandomCatImage = async (url, id) => {
    const gato = document.getElementById(id);
    try {
            const response = await fetch(url);
            if (response.ok) {           
                gato.src = url;
            } else {
                throw new Error("error al cargar");
            }
    } catch (error) {
        console.error(error);
    }
}

