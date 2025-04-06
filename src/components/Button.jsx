const Button = ({title, containerClass, leftIcon, id, rightIcon}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-voilet-50 px-7 py-3 text-black ${containerClass}`}>{leftIcon} <span className="relative inline-flex overflow-hidden font-general text-xs uppercase"><div>{title}</div></span>{rightIcon}</button>
  )
}

export default Button