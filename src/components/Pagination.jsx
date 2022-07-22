import React, { useRef } from 'react'
import '../App.css'

const Pagination = ({ arrayPages, currentPage, setCurrentPage, quantityPages }) => {

    const listNumber = useRef()

    if (listNumber.current) {
        const ul = listNumber.current.children
        for (let i = 0; i < ul.length; i++) {
            ul[i].classList.remove('page-number-active')
        }
        for (let i = 0; i < ul.length; i++) {
            if (ul[i].textContent == currentPage) {
                ul[i].classList.add('page-number-active')
                break
            }
        }

    }


    const prevPage = () => {
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages)
        } else {
            setCurrentPage(currentPage - 1)

        }
    }
    const nextPage = () => {
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const changePageTo = num => setCurrentPage(num)


    return (
        <div className='pagination-container'>
            <div onClick={prevPage}><span class="material-symbols-outlined">
                chevron_left
            </span></div>
            <ul ref={listNumber} className='pagination-number-container'>
                {
                    arrayPages?.map(num => (
                        <li onClick={() => changePageTo(num)} key={num} className='page-number'>{num}</li>
                    ))
                }
            </ul>
            <div onClick={nextPage}><span class="material-symbols-outlined">
                chevron_right
            </span></div>
        </div>
    )
}

export default Pagination