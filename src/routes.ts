export type RouteConfig = {
  name: string;
  path: string;
};
export type RedirectConfig = {
  path: string;
  redirect: string;
};
export type Config = RouteConfig | RedirectConfig;
const routes: Config[] = [
  {
    path: '*',
    redirect: '/webgl',
  },
  { name: 'webgl', path: '/webgl' },
];
export default routes;
