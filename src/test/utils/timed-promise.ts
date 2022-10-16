export const timedPromise = async (msTime: number) => {
    return await new Promise(
        resolver => {
            setTimeout(resolver, msTime)
        }
    )
}