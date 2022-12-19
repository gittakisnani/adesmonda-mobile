import React, { useState } from 'react'
import VariantsModal from './VariantModal';

const Controller = () => {
    const [variant, setVariant] = useState('Perletto Royale');
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal)


    const handleVariant = (variant) => {
        setVariant(variant);
        setShowModal(false)
    }  
  return (
    <div className='flex justify-between items-center my-2'>
        {showModal && <VariantsModal handleShowModal={handleShowModal} setVariant={handleVariant} />}
        <p className='text-xs leading-[18px] text-primary capitalize'>{variant}</p>
        <button onClick={handleShowModal} className='underline text-xs leading-3 font-semibold text-primary'>Change</button>
    </div>
  )
}

export default Controller