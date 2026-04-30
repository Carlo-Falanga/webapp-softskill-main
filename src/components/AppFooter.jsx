export default function AppFooter(){
    const currentYear = new Date().getFullYear();

    return(
        <>
        <footer className="bg-grey text-center text-lg-start mt-5">
            <div className="text-center p-3">
                © {currentYear} Copyright <a className="text-dark text-decoration-none" href="#" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
        </footer>   
        </>
    )
}