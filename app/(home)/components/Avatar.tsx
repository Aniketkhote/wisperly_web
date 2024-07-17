const Avatar = ({ src, name }: { src: string; name: string }) => (
  <div className="flex items-center space-x-3">
    <img className="h-9 w-9 rounded-full" src={src} alt={name} />
    <span className="text-sm">{name}</span>
  </div>
);

export default Avatar;
