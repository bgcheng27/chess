export default function Coordinates({ coordinates, containerClass, labelClass }) {
  return (
    <div className={containerClass}>
      {coordinates.map((coor) => (
        <span key={crypto.randomUUID()} className={labelClass}>
          {coor}
        </span>
      ))}
    </div>
  );
}
