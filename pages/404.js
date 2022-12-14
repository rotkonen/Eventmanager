import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>This page cannot be found.</h2>
            <p>Go back to the the starting page<Link href="/"><br></br>Start</Link></p>
        </div>
    
    )
}