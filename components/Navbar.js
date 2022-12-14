import Link from 'next/link'

export default function Navbar() {
    return (
    <header className="navbar-header">
        <Link href="/main">Event Planner</Link>
        <nav>
            <Link href="/eventcreator">Create Event</Link>
            <button type="submit" className="logout-btn" >Logout</button>
        </nav>
    </header>
    )
}