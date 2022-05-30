import React, {useState} from "react";
import TablePage from "./Pages/TablePage"
import { QueryClientProvider, QueryClient } from 'react-query';

export const App = () => {

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TablePage/>
    </QueryClientProvider>
  );
};

export default App;
