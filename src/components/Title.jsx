

const Title = ({ title, className="" }) => {
  return (
    <div className={` ${className} font-primary text-[#F2F2F2] font-black text-[56px]`}>{title}</div>
  )
}

export default Title