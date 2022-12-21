function RoutesWrapper (){
    return <h1>ola</h1>
}

// import { FileJsx } from 'phosphor-react';
// import { Component } from 'react';
// import { Route, redirect } from 'react-router-dom';
// import { useAuth } from '../context/useAuth';

// interface PrivateRouteProps {
//     component: Component
//     isPrivate: Boolean
// }

// export default function RoutesWrapper({ component, isPrivate, ...rest }: PrivateRouteProps) {
//     const auth = useAuth();
//     // if (loading) {
//     //     return (
//     //         <div></div>
//     //     )
//     // }

//     if (!auth.signed && isPrivate) {
//         return redirect('/')
//     }

//     if (auth.signed && !isPrivate) {
//         return redirect('/home')
//     }

//     return (
//         <Route
//             {...rest}
//             action={(props: PrivateRouteProps) => <Component {...props} />}
//         />
//     )
// }