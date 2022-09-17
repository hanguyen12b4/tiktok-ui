import Home from '~/pages/Home';
import Following from '~/pages/Following';

//publicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];
//privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
