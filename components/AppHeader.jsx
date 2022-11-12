import User from "./User";

export default function AppHeader() {
  return (
    <header className="p-6 flex justify-between text-sm text-gray-700">
      <div className="header-left flex gap-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="header-right flex gap-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User />
      </div>
    </header>
  );
}
