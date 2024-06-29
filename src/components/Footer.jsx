import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="px-6 py-2 bg-purple-600 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                <Link href={"/"}>© 2024 Allansf29</Link>
                <div className="pt-4 md:pt-0 flex flex-col md:flex-row items-center md:gap-4">
                    <p>Refund Policy</p>
                    <p>Privacy</p>
                    <p>Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}