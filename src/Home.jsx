import './App.css'

function Home() {
    return (
        <>
            <div className="columns-2 mt-40">
                <img
                    className="max-w-lg"
                    src="/src/assets/splits1.png"
                     alt="A woman with curly hair wearing a polka dotted shirt as the sits on the floor and smiles at the camera"/>
                <div className="h-screen flex items-center">
                    <blockquote className="align-middle">
                        Erica Lies<br/>is a funny writer and a world-renowned curly-hairologist.
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default Home