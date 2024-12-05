import './App.css'

function Home() {
    return (
        <>
            <div className="columns-2 mt-10">
                <img
                    className="max-w-s"
                    src="/src/assets/bettermuppet.png"
                     alt="A woman with curly hair wearing a polka dotted shirt sits on the floor and smiles at the camera. 
                     Her vibe is best described as muppet."/>
                <div className="h-screen flex items-center">
                    {/* <blockquote className="montserrat-alternates-semibold align-middle mb-[80px]"> */}
                        <h2 className='montserrat-alternates-semibold mb-[300px]'>
                        Erica Lies is a funny writer who always tells the truth (even when she doesn't)</h2>
                    {/* </blockquote> */}
                </div>
            </div>
        </>
    )
}

export default Home