import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import { Container } from 'react-bootstrap';

const Shop = () => {
    return (
        <Container>
            <CategoryMenu />
            <ProductList />
        </Container>
    );
}

export default Shop;