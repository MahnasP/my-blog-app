import React from 'react'
import { forwardRef,useId } from 'react'

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref) {
    const id = useId();
    return (
        <div className=' w-full'>
            {label && <label className=' inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input className={` px-3 py-2 rounded-lg bg-white text-sycamore-900 outline-none focus:bg-sycamore-50 duration-200 border border-sycamore-200 w-full  ${className}`}
                type={type}
                id={id}
                ref={ref}
                {...props}
            />
        </div>
    );
})

export default Input