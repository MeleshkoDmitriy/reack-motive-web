import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./constants/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/layout-components/Layout/Layout";

import { HomePage, CharactersPage, FavoritesPage } from './pages'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />
      },
      {
        path: Routes.CHARACTERS,
        element: <CharactersPage />,
      },
      {
        path: Routes.FAVORITES,
        element: <FavoritesPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
