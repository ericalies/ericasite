import './App.css'

function Home() {
    return (
        <>
        <blockquote className="montserrat-alternates-bold align-middle"><h1 className='montserrat-alternates-regular'>Erica Lies Has a Home (Page)</h1></blockquote>
            <div className="columns-2 mt-10">
                <img
                    className="max-w-s size-90"
                    src="/src/assets/ericabio.JPG"
                     alt="A woman with curly hair wearing a polka dotted shirt sits on the floor and smiles at the camera. 
                     Her vibe is best described as muppet."/>
            
                <div className="h-screen flex items-center">
                    {/* <blockquote className="montserrat-alternates-semibold align-middle mb-[80px]"> */}
                        
                        <h3 className='montserrat-alternates-semibold mb-[200px]'>
                        Erica is a funny writer who always tells the truth (even when she doesn't).</h3>
                    {/* </blockquote> */}
                </div>


            </div>
        </>
    )
}

export default Home