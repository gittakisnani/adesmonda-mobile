import { useState } from 'react'
import Container from '../components/Container'
import Meta from '../components/Meta';
import MyCart from '../components/MyCart/MyCart'
import Title from '../components/Title';
import OrderSummary from '../components/OrderSummary'
import { useRouter } from 'next/router';
const MyCartPage = () => {
  const [checked, setChecked] = useState([]);
  const router = useRouter()
  const handleChecked = (id) => {
    setChecked(checked.includes(id) ? checked.filter(item => item !== id) : [...checked, id])
  }

  const handleCheckAll = () => {
    const wasChecked = [1, 2, 3, 4].every(item => checked.includes(item))
    setChecked(wasChecked ? [] : [1, 2, 3, 4])
  }

  return (
    <>
      <Meta title='My Cart' />
        <section className='flex gap-2 flex-col flex-1'>
            <div className="px-4"><Title title='my cart' /></div>
            <Container className='flex flex-col flex-1 gap-4'>
                <label htmlFor="checkAll" className='flex gap-2 items-center px-2'>
                    <input onChange={handleCheckAll} checked={[1, 2, 3, 4].every(item => checked.includes(item))} type="checkbox" className='accent-primary h-5 w-5' id="checkAll" />
                    <p style={{ fontFamily: 'Marcellus'}} className='uppercase text-md leading-5'>Check all</p>
                </label>
                <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={1} handleChecked={() => handleChecked(1)} checked={checked} />
                <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={2} handleChecked={() => handleChecked(2)} checked={checked} />
                <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={3} handleChecked={() => handleChecked(3)} checked={checked} />
                <MyCart price='3.900.000' title='black string couple coffee table' color='black' id={4} handleChecked={() => handleChecked(4)} checked={checked} />
            </Container>
        <OrderSummary onClick={() => router.push('/checkout')} includeSubtotal />
        </section>
    </>
  )
}

export default MyCartPage