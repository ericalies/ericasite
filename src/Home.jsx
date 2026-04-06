import './App.css'
import drawingURL from './assets/drawing.png'
import blueskyIconURL from './assets/square-bluesky-brands-solid.png'
import instagramIconURL from './assets/square-instagram-brands-solid.png'

function Home() {
    return (
        <>
            <blockquote className="montserrat-alternates-bold align-middle"><h1
                className='montserrat-alternates-regular'>Erica Lies Has a Home (Page)</h1></blockquote>

            <div className="mt-20">
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[40%_50%] justify-center">
                <img
                    className=""
                    src={drawingURL}
                    alt="A woman with curly hair wearing a polka dotted shirt sits on the floor and smiles at the camera. 
                     Her vibe is best described as muppet."/>

                <div className="content-center">
                    {/* <blockquote className="montserrat-alternates-semibold align-middle mb-[80px]"> */}

                    <h3 className='montserrat-alternates-semibold'>
                        Erica is a funny writer who always tells the truth (even when she doesn't).</h3>
                    {/* </blockquote> */}
                </div>
            </div>

            <footer className="mt-16 mb-8">
                <div className="flex items-center justify-center gap-5">
                    <a
                        href="https://bsky.app/profile/ericaliesalot.bsky.social"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Bluesky">
                        <img className="h-16 w-16" src={blueskyIconURL} alt="Bluesky icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/ericaliesalot/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Instagram">
                        <img className="h-16 w-16" src={instagramIconURL} alt="Instagram icon" />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Home