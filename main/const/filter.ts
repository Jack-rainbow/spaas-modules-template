import dayjs from 'dayjs'

export default function formatDate(time: Date, format: string): string {
  if (!time) {
    return ''
  }
  return dayjs(time).format(format)
}
