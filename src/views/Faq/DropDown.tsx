export default function DropDown({
  direction = 'right',
  className,
}: {
  direction?: 'down' | 'right';
  className?: string;
}) {
  return (
    <svg
      width="11"
      height="19"
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.38281 17.916L9.60209 9.65943L1.38281 1.40284"
        stroke={direction === 'right' ? '#FFFFFF60' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
