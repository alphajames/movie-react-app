export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <div className="flex justify-center">
            <p className="opacity-40">&copy; {date} James Gayatao</p>
        </div>
    )
}
