import {  ButtonBackPagination, ButtonNextPagination, PaginationButton, PaginationContainer } from '@/styles/pagination'
import Image from 'next/image'
import actuallyback from '../../assets/pagination/leftvectorpurple.svg'
import actuallynext from '../../assets/pagination/rightvectorpurple.svg'
import pasteback from '../../assets/pagination/leftvectorwhite.svg'
import pastenext from '../../assets/pagination/rightvectorwhite.svg'

interface PaginationProps{
    page: 'actually'| 'paste'
}

export function Pagination({ page }: PaginationProps){
        return (
            <PaginationContainer>
                <ButtonBackPagination><Image src={page === 'actually' ? actuallyback : pasteback} alt=""/></ButtonBackPagination>
                    <PaginationButton page={page}>1</PaginationButton>
                    <PaginationButton page={page}>2</PaginationButton>
                    <PaginationButton page={page}>3</PaginationButton>
                    <PaginationButton page={page}>4</PaginationButton>
                    <PaginationButton page={page}>5</PaginationButton>
                    <PaginationButton page={page}>...</PaginationButton>
                <ButtonNextPagination><Image src={page === 'actually' ? actuallynext : pastenext} alt=""/></ButtonNextPagination>
            </PaginationContainer>
        )      
}