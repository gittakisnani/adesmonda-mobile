const CustomButton = ({ text = 'See more', onClick}) => {
    return (
      <button {...onClick ? {onClick} : null} className='w-[162px] h-[56px] rounded-[16px] bg-[#F8ECEC] text-black uppercase font-bold leading-6 mx-auto'>{text}</button>
    )
  }
  
  export default CustomButton