import React,{ useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export default function PaaswordAuthInput({name,type}) {
    const [showPassword,setShowPassword]=useState(false)
    const passwordChanged =()=>{
        setShowPassword(!showPassword)
    }
  return (
    <div className="flex flex-col items-center content-center  space-y-1">
        <div className=" w-full flex flex-col items-center relative">
            <input
            name={name}
            className="w-[100%] m-1 text-sx py-2 px-4 rounded-lg outline-none"
            type={showPassword ? "text" : "password"} 
            />
            
            <div className="absolute bottom-4 right-[1rem]">
            {showPassword ? (
                <FaEyeSlash className="text-gray-500" onClick={passwordChanged} />
            ) : (
                <FaEye className="text-gray-500" onClick={passwordChanged} />
            )}
            </div>
        </div>
    </div>
  )
}
