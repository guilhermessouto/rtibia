import { createRootRoute, Outlet } from "@tanstack/react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/api/query-client"

import { ThemeProvider } from "@/context/theme-provider"

import Header from "@/components/layouts/Header"

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent () {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
