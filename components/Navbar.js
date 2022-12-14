import Link from 'next/link'

export default function Navbar() {
    return (
    <header className="navbar-header">
        <Link href="/main">Event Planner</Link>
        <nav>
            <Link href="/eventcreator">Create Event</Link>
            <Link href="/" className="logout-btn" >Logout</Link>
        </nav>
    </header>
    )
}