import { keyframes } from 'styled-components'

export const spinnerMovement = (size: number) => keyframes`
0% {
  opacity: 1;
  transform: translate(0 0);
}
49.99% {
  opacity: 1;
  transform: translate(${size}px, 0);
}
50% {
  opacity: 0;
  transform: translate(${size}px, 0);
}
100% {
  opacity: 0;
  transform: translate(0, 0);
}
`

export const spinnerMovementRev = (size: number) => keyframes`
0% {
    transform: translate(0, 0);
  }
50% {
  transform: translate(${size}px, 0);
}
100% {
  transform: translate(0, 0);
}
`
