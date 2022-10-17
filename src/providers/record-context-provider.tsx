import { createContext, ReactNode, useContext } from "react";

const ListContext = createContext<Record<string, any>>({})

export const useRecordContext = <T extends Record<string, any>>() => useContext(ListContext) as T

interface ListContextProviderProps<T extends Record<string, any> = any> {
    children: ReactNode
    record: T
}

export const RecordContextProvider = <T extends Record<string, any>>({ children, record }: ListContextProviderProps) => {
    return (
        <ListContext.Provider value={record as T}>
            {children}
        </ListContext.Provider>
    )
}
