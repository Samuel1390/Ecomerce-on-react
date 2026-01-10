export function AddToCartIcon({ fill = "#fafafa" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M4.764 1H0v2h3.236l2.73 10.011L4.72 18H22v-2H7.28l.5-2h11.94l3.667-11H5.31zM17 9.5h-2.5V12h-2V9.5H10v-2h2.5V5h2v2.5H17zM6 19a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
      />
    </svg>
  );
}
export function RemoveToCartIcon(fill = "fafafa") {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        fill={fill}
        d="M1.41 1.13L0 2.54l4.39 4.39l2.21 4.66L3.62 17h10.84l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41zM7 15l1.1-2h2.36l2 2zm9.05-2.06h.73L21.7 4H7.12zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2"
      />
    </svg>
  );
}
export function CartIcon({ fill = "#fafafa" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="2"
        d="M1 2h3l3 11l-1 4h15M7 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm14 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7 13h12l3-9H4.545z"
      />
    </svg>
  );
}
export function BagIcon({ fill = "#fafafa" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2l.917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8z"
      />
    </svg>
  );
}
