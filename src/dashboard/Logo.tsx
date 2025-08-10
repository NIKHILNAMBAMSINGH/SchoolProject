import { Link } from "react-router-dom"
import { GraduationCap } from "lucide-react"

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="bg-red-500 rounded-full p-1 flex items-center justify-center">
        <GraduationCap className="text-white w-5 h-5" />
      </div>
      <span className="font-bold text-xl">
        Alpha<span className="text-blue-500">School</span>
      </span>
    </Link>
  )
}

export default Logo