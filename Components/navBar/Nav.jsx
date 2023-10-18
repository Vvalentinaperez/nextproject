import Link from "next/link"
export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/">
                   HOME
                </Link>
            </li>
            <li>
                <Link href="/about"> 
                   ABOUT
                </Link>
            </li>
            <li>
                <Link href="/clients">
                   CLIENTS
                </Link>
            </li>
        </ul>
    </nav>
  )
}
