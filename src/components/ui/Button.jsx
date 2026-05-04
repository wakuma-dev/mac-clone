export function Button({children, variant="primary", className="", ...props }){
    const style = {
      primary: "bg-black text-white border-transparent",
      secondary: "bg-white text-black border-black"
    }
    return(
    <button className={`w-fit px-4 py-2 rounded-full ${style[variant]} ${className}`} {...props}>
        {children}
    </button>
    );
}