export const timestampToMonthYear = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, { year: "numeric", month: "short"})
}