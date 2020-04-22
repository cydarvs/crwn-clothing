import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import firebase from 'firebase/app';
import 'firebase/firestore';
import './header.styles.scss';

const firestore = firebase.firestore();

firestore.doc('/users/bsjZGdUj9PWrBXphhOQN/cartItems/zHVRVojg8UtfvrWgu4it');
firestore.collection('/users/bsjZGdUj9PWrBXphhOQN/cartItems/');


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
);

export default Header;