export const dateFormat = (date: string) => {
    const d = new Date(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);;
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    return `${month} ${day}, ${year}`
}