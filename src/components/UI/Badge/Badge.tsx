import { SBadge } from "./Badge.style"

type TBadge = {
  badgeText: string,
}

export const Badge = ({
  badgeText, }: TBadge) => {
  return (
    <SBadge>{badgeText}</SBadge>
  )
}