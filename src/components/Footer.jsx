function Footer(){
    const currentYear = new Date();
    const year = currentYear.getFullYear();
   return ( <footer>
        <p>
        Copyright &#169; {year}
        </p>
    </footer>);
    
}

export default Footer;