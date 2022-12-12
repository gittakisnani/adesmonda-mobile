import React, { useState } from 'react'
import CustomOrderItem from './CustomOrderItem'
import ItemOrder from './ItemOrder'
import MyAddress from './MyAddress'
import OrderSummary from '../OrderSummary'
import CustomButton from '../CustomButton'
import OrderModal from '../OrderModal'
import Title from '../Title'
const CustomOrder = () => {
  const [request, setRequest] = useState(false);

  if(request) return <OrderModal />
  return (
    <section className='mb-10'>
        <Title title={'Orders'} />
        <div className='flex flex-col gap-4'>
        <CustomOrderItem />
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='p-2 rounded-2xl flex flex-col gap-4'>
                <h4 className="font-bold leading-5">Items Order</h4>
                <div className="flex flex-col gap-2">
                <ItemOrder />
                <ItemOrder />
                <ItemOrder />
                </div>
              <MyAddress includeChange={false} includeTrash={false} style={{background: 'rgba(0, 68, 65, 0.05)'}} />
              <OrderSummary />
        </div>
        <CustomButton onClick={() => setRequest(true)} text='Request Invoice' />   
        </div>
    </section>
  )
}

export default CustomOrder