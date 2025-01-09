//Genera una URL completa donde se encuentra la carpeta assets
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
};