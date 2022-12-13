import React, { useState } from 'react'
import Container from '../components/Container';
import { HiOutlineFilter } from 'react-icons/hi'
import Product from '../components/Home/Product';
import Filter from '../components/Filter';
import Meta from '../components/Meta';
import Title from '../components/Title';
const Products = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(false);
    const [filters, setFilters] = useState({
        category: [],
        sort: 'Default',
        price: [0, 1000]
    })
    const handleFilter = () => {
        setFilter(!filter)
    }
    const handleSearchChange = (e) => {
        e.preventDefault(e.target.value)
    }

  return (
    <>
        <Meta title='Products' />
        <section className='my-10'>
            {filter && <div className='filtersWrapper fixed top-10 w-[80%] max-w-[400px] p-4 left-1/2 -translate-x-1/2 z-20 bottom-10 bg-white overflow-y-auto rounded-xl'>
                <Filter handleFilter={handleFilter} filters={filters} setFilters={setFilters} />
            </div>}
            <div className='px-4'><Title title='products' /></div>
            <Container className='flex flex-col gap-6'>
                <div className='flex items-center gap-2 overflow-x-auto filtersWrapper'>
                    {filters.sort !== 'Default' && <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{filters.sort}</p>}
                    {filters.category?.map((cat, index) => (
                        <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2' key={index}>{cat}</p>
                    ))}
                    {filters.price[0] > 0 && filters.price[1] && <p style={{  background: 'linear-gradient(90deg, #FFFFFF 0%, #FFF3E5 100%)'}} className='whitespace-nowrap text-xs rounded-lg p-1 px-2'>{filters.price[0]}-{filters.price[1]}</p>
                    }
                    
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <form className='flex-1'>
                        <input type='text' className='p-2 outline-none border rounded-sm w-full' value={search} onChange={handleSearchChange} />
                    </form>
                    <button onClick={handleFilter} className='border-md bg-primary p-2 self-stretch flex justify-center items-center text-white text-xl rounded-sm'>
                        <HiOutlineFilter />
                    </button>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </Container>
        </section>
    </>
  )
}

export default Products