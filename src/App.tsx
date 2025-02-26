import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavoritesPage } from "./pages/favorites-page/FavoritesPage";
import { Routes } from "./constants/routes";
import { CharactersPage } from "./pages/characters-page/CharactersPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/layout-components/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
