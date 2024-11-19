import './App.css'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <div className="h-4">{/* This adds some space between the heading and the card */}</div>
            <div className="mx-auto max-w-xl bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg" src="/src/assets/splits.png" alt=""/>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Muppetational</h5>
                    <p className="mb-3 font-normal text-gray-700">Hi! I&#39;m a Jim Henson creation come to life.</p>
                </div>
            </div>
        </>
    )
}

export default Home