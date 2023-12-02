function findLogo(logo) {
    try {
        let path = import( `../assets/${logo}.jsx` );
        return path
        /* Profilee = import( `../assets/${image}.jsx` ); */
    }
    catch(err) {
        console.log(err + "error")
    }
}
export default findLogo
