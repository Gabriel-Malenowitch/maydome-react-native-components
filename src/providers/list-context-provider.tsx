import { createContext, ReactNode, useContext } from "react";

const ListContext = createContext<Record<string, any>[]>([])

export const useListContext = <T extends Record<string, any>>() => useContext(ListContext) as T[]

interface ListContextProviderProps<T extends Record<string, any> = any[]> {
    children: ReactNode
    recordList: T
}

export const ListContextProvider = <T extends Record<string, any>>({ children, recordList }: ListContextProviderProps) => {
    return (
        <ListContext.Provider value={recordList as T[]}>
            {children}
        </ListContext.Provider>
    )
}
