import React from 'react';
import { NavItem } from '../NavigationBar/NavigationBar';
import AuthScreenByQuery from '../../../pages/AuthScreenByQuery/AuthScreen';
import AuthScreen, { AuthAction } from '../../../pages/AuthScreen/AuthScreen';
import ProfileScreen from '../../../pages/ProfileScreen/ProfileScreen';
import CatalogScreen from '../../../pages/CatalogScreen/CatalogScreen';
import { AuthenticationState } from '../../hocs/withAuthenticationState';
import ProductsEditScreen from '../../../pages/ProductsScreen/ProductsEditScreen';
import CartScreen from '../../../pages/CartScreen/CartScreen';

export const shopMenuItems: NavItem[] = [
  { label: 'Routes.Catalog.label', path: '/catalog', element: <CatalogScreen /> },
  { label: 'Routes.Cart.label', path: '/cart', element: <CartScreen /> },
];

export const adminMenuItems: NavItem[] = [
  {
    label: 'Routes.Products.label',
    authenticationState: AuthenticationState.AdminAuthenticated,
    path: '/products',
    element: <ProductsEditScreen />,
  },
];

export const authMenuItems: NavItem[] = [
  {
    label: 'Routes.Auth.label',
    dropdown: [
      {
        label: 'Routes.Auth.SignIn.label',
        authenticationState: AuthenticationState.Unauthenticated,
        path: '/auth/SignIn',
        element: <AuthScreen authAction={AuthAction.SignIn} />,
      },
      {
        label: 'Routes.Auth.SignUp.label',
        authenticationState: AuthenticationState.Unauthenticated,
        path: '/auth/SignUp',
        element: <AuthScreen authAction={AuthAction.SignUp} />,
      },
      {
        label: 'Routes.Auth.SignOut.label',
        authenticationState: AuthenticationState.Authenticated,
        path: '/auth/SignOut',
        element: <AuthScreen authAction={AuthAction.SignOut} />,
      },
    ],
  },
];

export const authByQueryMenuItems: NavItem[] = [
  {
    label: 'Routes.AuthByQuery.label',
    dropdown: [
      {
        label: 'Routes.AuthByQuery.SignIn.label',
        authenticationState: AuthenticationState.Unauthenticated,
        path: '/authByQuery/SignIn',
        element: <AuthScreenByQuery authAction={AuthAction.SignIn} />,
      },
      {
        label: 'Routes.AuthByQuery.SignUp.label',
        authenticationState: AuthenticationState.Unauthenticated,
        path: '/authByQuery/SignUp',
        element: <AuthScreenByQuery authAction={AuthAction.SignUp} />,
      },
      {
        label: 'Routes.AuthByQuery.SignOut.label',
        authenticationState: AuthenticationState.Authenticated,
        path: '/authByQuery/SignOut',
        element: <AuthScreenByQuery authAction={AuthAction.SignOut} />,
      },
    ],
  },
];

export const profileMenuItems: NavItem[] = [
  {
    label: 'Routes.Profile.label',
    authenticationState: AuthenticationState.Authenticated,
    path: '/profile',
    element: <ProfileScreen />,
  },
];

export const testMenuItems: NavItem[] = [
  // { label: 'Routes.test.label', path: '/test', element: <Modal visible={true} setVisible={() => { }} >{Array.from({ length: 100 }).map((_, index) => <div key={index}>{`text ${index}`}</div>)}</Modal> },
];
