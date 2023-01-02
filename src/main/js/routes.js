const ExamplePage = () => import(/* webpackChunkName: "example" */ './pages/ExamplePage.vue');

export default [
    {
        name: 'ExamplePage',
        path: '/example-page',
        component: ExamplePage,
    },
];