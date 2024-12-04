import './App.css'

function Home() {
    return (
        <>
            <div className="columns-2 mt-10">
                <img
                    className="max-w-s"
                    src="/src/assets/splits1.png"
                     alt="A woman with curly hair wearing a polka dotted shirt sits on the floor and smiles at the camera. 
                     Her vibe is best described as muppet."/>
                <div className="h-screen flex items-center">
                    <blockquote className="montserrat-alternates-black align-middle mb-[80px]">
                        Erica Lies is a funny writer and a world-renowned curly-hairologist.
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default Home